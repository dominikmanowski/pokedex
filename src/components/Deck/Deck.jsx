import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

function Deck({ pokemons }) {

  return (
    <div className="deck">
       {pokemons && pokemons.map(pokemon => <Card pokemon={pokemon} />)}
    </div>
  );
}

Deck.propTypes = {
  pokemons: PropTypes.array
};

export default Deck;
