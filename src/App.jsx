import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundaries from './components/ErrorBoundaries/ErrorBoundaries';
import Header from './components/Header/Header';
import Deck from './components/Deck/Deck';
import Details from './components/Details/Details';

import { URL } from './constants';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  console.log('TCL: App -> favorites', favorites);

  const handleAddToFavorite = id => {
    if (favorites.includes(id)) {
      setFavorites(pokemons.find(pokemon => pokemon.id === id));
    }
  };

  const query = 'cards?supertype=pokemon/';

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
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Deck pokemons={pokemons} />
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
