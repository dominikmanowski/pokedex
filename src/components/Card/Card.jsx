import React from "react";
import PropTypes from "prop-types";

function Card({ pokemon }) {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
}

Card.propTypes = {
  Pokemon: PropTypes.object.isRequired
};

export default Card;
