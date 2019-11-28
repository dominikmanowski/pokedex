import React, { useMemo } from 'react';
import Loader from '../Loader/Loader';
import { Link, withRouter } from 'react-router-dom';
import { checkAvailability } from '../../utils/utils';
import './Details.css';

const Details = ({ pokemons, match }) => {
  const pokemon = useMemo(
    () => pokemons.find(pokemon => pokemon.id === match.params.id),
    [pokemons, match]
  );

  return (
    <>
      <Link to="/">
        <button className="go-back">&#x21A9;</button>
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
        </div>
      )}
    </>
  );
};

export default withRouter(Details);
