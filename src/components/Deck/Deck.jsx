import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Deck.css"

function Deck({ pokemons }) {
  return (
    <div className="deck">
      <div className="container">
        {!pokemons.length && <p>Loading...</p>}
        {pokemons && pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </div>
  );
}

Deck.propTypes = {
  pokemons: PropTypes.array
};

export default Deck;
