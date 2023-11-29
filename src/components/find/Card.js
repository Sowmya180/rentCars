// Card.js

import React from "react";
import PropTypes from "prop-types";
import styles from "./Find.module.css";

const Card = ({
  image,
  make,
  capacity,
  bagCapacity,
  mileage,
  transmission,
  price,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={make} />
      <div className={styles.cardDetails}>
        <h3>{make}</h3>
        <p>Capacity: {capacity}</p>
        <p>Bag Capacity: {bagCapacity}</p>
        <p>Mileage: {mileage}</p>
        <p>Transmission: {transmission}</p>
        <p>Price per Day: ${price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  bagCapacity: PropTypes.number.isRequired,
  mileage: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
