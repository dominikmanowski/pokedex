import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import './Deck.css';

const Deck = ({ pokemons }) => {
  const showSpinner = useMemo(() => pokemons && !pokemons.length, [pokemons]);
  return (
    <div className="deck">
      <div className="container">
        {showSpinner && <Loader />}
        {pokemons &&
          pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  );
}

Deck.propTypes = {
  pokemons: PropTypes.array,
};

export default memo(Deck);
