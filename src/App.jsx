import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Deck from './components/Deck/Deck';
import Details from './components/Details/Details';

import { URL } from './constants';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const query = 'cards';

  useEffect(() => {
    axios.get(`${URL}${query}`).then(res => {
      const cards = res.data.cards.filter(card => card.supertype === "Pokémon")
      setPokemons(cards);
    });
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Deck pokemons={pokemons} />
          </Route>
          <Route path="/pokemon/:id">
            <Details pokemons={pokemons} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default memo(App);
