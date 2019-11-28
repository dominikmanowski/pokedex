import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ pokemon }) => {
  const { name, imageUrl, id } = pokemon;

  return (
    <div>
      <Link to={`/pokemon/${id}`}className="card-container">
        <h2 className="name">{name}</h2>
        <img src={imageUrl} alt={name} />
      </Link>
    </div>
  );
}

Card.propTypes = {
  Pokemon: PropTypes.object,
};

export default Card;
