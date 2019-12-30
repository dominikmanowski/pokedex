import React, { useMemo, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { Link, withRouter } from 'react-router-dom';
import { checkAvailability } from '../../utils/utils';
import './Details.css';
import { PokemonsContext } from '../../PokemonsContext';

const Details = ({ handleAddToFavorite, favorites, match }) => {
  const pokemons = useContext(PokemonsContext);
  const pokemon = useMemo(
    () => pokemons?.find(pokemon => pokemon.id === match.params.id),
    [pokemons, match]
  );

  const isFavorite = useMemo(() => favorites?.includes(pokemon?.id), [
    favorites,
    pokemon,
  ]);

  const handleClick = useCallback(() => {
    handleAddToFavorite(pokemon?.id);
  }, [handleAddToFavorite, pokemon]);

  return (
    <>
      <Link to="/">
        <button className="go-back btn">&#x21A9;</button>
      </Link>
      {!pokemon && <Loader />}
      {pokemon && (
        <div className="detail-box">
          <div className="section">
            <h2 className="name">{pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
          </div>
          <div className="section">
            <p>HP: {checkAvailability(pokemon.hp)}</p>
            <p>Nr: {checkAvailability(pokemon.number)}</p>
            <p>Artist: {checkAvailability(pokemon.artist)}</p>
            <p>Rarity: {checkAvailability(pokemon.rarity)}</p>
            <div>
              <>
                Attacks:
                {!pokemon.attacks.length ? (
                  <span> N/A</span>
                ) : (
                  <ul>
                    {pokemon.attacks.map(attack => (
                      <li key={attack.name}>{attack.name}</li>
                    ))}
                  </ul>
                )}
              </>
            </div>
          </div>
          <div className="section">
            <p>Series: {checkAvailability(pokemon.series)}</p>
            <p>Evolves from: {checkAvailability(pokemon.evolvesFrom)}</p>
            <p>Set: {checkAvailability(pokemon.set)}</p>
            <p>Subtype: {checkAvailability(pokemon.subtype)}</p>
          </div>
          <button
            onClick={handleClick}
            className={`fav-button btn ${isFavorite && 'black-btn'}`}
          >
            &#10084;
          </button>
        </div>
      )}
    </>
  );
};

Details.propTypes = {
  pokemons: PropTypes.array,
  handleAddToFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string),
  match: PropTypes.object,
};

export default withRouter(Details);
