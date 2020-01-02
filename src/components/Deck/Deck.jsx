import React, { useState, useMemo, memo, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import { filterPokemons } from '../../utils/utils';
import styles from './Deck.module.css';
import { PokemonsContext } from '../../PokemonsContext';
import { POKEMONS_PER_PAGE } from '../../constants';

const Deck = ({ favorites }) => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [lastSelectedPage, setLastSelectedPage] = useState(selectedPage);
  const pokemons = useContext(PokemonsContext);

  const filteredPokemons = filterPokemons(pokemons, searchQuery);
  const indexOfLastPokemonOnPage = useMemo(
    () => selectedPage * POKEMONS_PER_PAGE,
    [selectedPage]
  );
  const indexOfFirstPokemonOnPage = useMemo(
    () => indexOfLastPokemonOnPage - POKEMONS_PER_PAGE,
    [indexOfLastPokemonOnPage]
  );
  const pokemonsToShow = useMemo(
    () =>
      filteredPokemons?.slice(
        indexOfFirstPokemonOnPage,
        indexOfLastPokemonOnPage
      ),
    [filteredPokemons, indexOfFirstPokemonOnPage, indexOfLastPokemonOnPage]
  );

  const handleSearch = e => {
    setSearchQuery(e.target.value);
    e.target.value ? setSelectedPage(1) : setSelectedPage(lastSelectedPage);
  };

  const handleSelectedPage = useCallback(number => {
    setSelectedPage(number);
    setLastSelectedPage(number);
  }, []);

  const showSpinner = useMemo(() => !pokemons?.length, [pokemons]);

  const pageNumbers = useMemo(
    () =>
      Array.from(
        {
          length: Math.ceil(filteredPokemons?.length / POKEMONS_PER_PAGE),
        },
        (_, key) => ++key
      ),
    [filteredPokemons]
  );

  return (
    <div className={styles.deck}>
      {showSpinner && <Loader />}
      {!!pokemons?.length && (
        <>
          <input
            type="text"
            className={styles.searchBar}
            onChange={handleSearch}
            placeholder="Search Pokemons by name, type or subtype"
          />
          <Pagination
            pageNumbers={pageNumbers}
            selectedPage={selectedPage}
            handlePageSelect={handleSelectedPage}
          />
          <div className={styles.container}>
            {pokemonsToShow.map(pokemon => (
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
  favorites: PropTypes.arrayOf(PropTypes.string),
};

export default memo(Deck);
