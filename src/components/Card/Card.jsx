import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({
  pokemon = { name: 'Unknown', imageUrl: 'none', id: null },
  favorites,
}) => {
  const { name, imageUrl, id } = pokemon;

  const isFavorite = useMemo(() => favorites.includes(id), [favorites, id]);

  return (
    <div>
      <Link to={`/pokemon/${id}`} className="card-container">
        {isFavorite && <span className="favorite">&#10084;</span>}
        <h2 className="name">{name}</h2>
        <img src={imageUrl} alt={name} />
      </Link>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.object,
  favorites: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
