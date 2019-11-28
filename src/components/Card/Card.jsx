import React from "react";
import PropTypes from "prop-types";
import './Card.css'

function Card({ pokemon }) {

  const {name, imageUrl} = pokemon

  return (
    <div className='card-container'>
      <h2 className='name'>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

Card.propTypes = {
  Pokemon: PropTypes.object
};

export default Card;
