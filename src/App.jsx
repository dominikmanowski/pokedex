import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundaries from './components/ErrorBoundaries/ErrorBoundaries';
import Header from './components/Header/Header';
import Deck from './components/Deck/Deck';
import Details from './components/Details/Details';

import { URL } from './constants';
const query = 'cards?supertype=pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorite = id => {
    const favPokemon = pokemons.find(pokemon => pokemon.id === id);
    if (!favorites.includes(id)) {
      setFavorites(prevState => [...prevState, favPokemon.id]);
      return;
    }
    setFavorites(prevState => prevState.filter(prevId => prevId !== id));
  };

  useEffect(() => {
    axios
      .get(`${URL}${query}`)
      .then(res => {
        setPokemons(res.data.cards);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, []);

  return (
    <>
      <ErrorBoundaries>
        <Header title="Pokedex" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Deck pokemons={pokemons} favorites={favorites} />
            </Route>
            <Route path="/pokemon/:id">
              <Details
                pokemons={pokemons}
                handleAddToFavorite={handleAddToFavorite}
                favorites={favorites}
              />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundaries>
    </>
  );
}

export default memo(App);
