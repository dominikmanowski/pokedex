import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({
  pokemon = { name: 'Unknown', imageUrl: 'none', id: null },
  favorites,
}) => {
  const { name, imageUrl, id } = pokemon;

  const isFavorite = useMemo(() => favorites.includes(id), [favorites, id]);

  return (
    <div>
      <Link to={`/pokemon/${id}`} className={styles.cardContainer}>
        {isFavorite && <span className={styles.favorite}>&#10084;</span>}
        <h2 className={styles.name}>{name}</h2>
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
