import React, { useState, useMemo, memo, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { filterPokemons } from '../../utils/utils';
import './Deck.css';
import { PokemonsContext } from '../../PokemonsContext';

const Deck = ({ favorites }) => {
  const [searchQuery, setSearchQuery] = useState([]);
  const pokemons = useContext(PokemonsContext);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const showSpinner = useMemo(() => pokemons && !pokemons?.length, [pokemons]);

  return (
    <div className="deck">
      {showSpinner && <Loader />}
      {!!pokemons?.length && (
        <>
          <input type="text" className="search-bar" onChange={handleSearch} />
          <div className="container">
            {filterPokemons(pokemons, searchQuery).map(pokemon => (
              <Card pokemon={pokemon} key={pokemon.id} favorites={favorites} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Deck.propTypes = {
  pokemons: PropTypes.array,
  favorites: PropTypes.arrayOf(PropTypes.number),
};

export default memo(Deck);
