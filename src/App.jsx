import React, { useState, useContext, memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundaries from './components/ErrorBoundaries/ErrorBoundaries';
import { PokemonsContext } from './PokemonsContext';
import Header from './components/Header/Header';
import Deck from './components/Deck/Deck';
import Details from './components/Details/Details';

function App() {
  const [favorites, setFavorites] = useState([]);

  const pokemons = useContext(PokemonsContext);

  const handleAddToFavorite = id => {
    const favPokemon = pokemons.find(pokemon => pokemon.id === id);
    if (!favorites.includes(id)) {
      setFavorites(prevState => [...prevState, favPokemon.id]);
      return;
    }
    setFavorites(prevState => prevState.filter(prevId => prevId !== id));
  };

  return (
    <>
      <ErrorBoundaries>
        <Header title="Pokedex" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Deck favorites={favorites} />
            </Route>
            <Route path="/pokemon/:id">
              <Details
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
