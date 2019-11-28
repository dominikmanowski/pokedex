import React, { useMemo } from 'react';
import Loader from '../Loader/Loader';
import { withRouter } from 'react-router-dom';
import './Details.css'

const Details = ({ pokemons, match }) => {
  const pokemon = useMemo(
    () => pokemons.find(pokemon => pokemon.id === match.params.id),
    [pokemons, match]
  );

  return (
    <>
      {!pokemon && <Loader />}
      {pokemon && (
        <div className='detail-box'>
          <h2 className="name">{pokemon.name}</h2>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div>
      )}
    </>
  );
}

export default withRouter(Details);
