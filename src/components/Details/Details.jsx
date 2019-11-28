import React, { useMemo } from 'react';
import Loader from '../Loader/Loader';
import { Link, withRouter } from 'react-router-dom';
import './Details.css';

const Details = ({ pokemons, match }) => {
  const pokemon = useMemo(
    () => pokemons.find(pokemon => pokemon.id === match.params.id),
    [pokemons, match]
  );

  return (
    <>
      <Link to='/'><button class="go-back">&#x21A9;</button></Link>
      {!pokemon && <Loader />}
      {pokemon && (
        <div className="detail-box">
          <h2 className="name">{pokemon.name}</h2>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div>
      )}
    </>
  );
};

export default withRouter(Details);
