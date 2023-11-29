import React from "react";
import styles from "./Driver.module.css";
import Drive from "../../components/images/drive.png";
const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="/" />
      </div>
      <div>
        <h2>
          Unleash the adventure with our curated selection of rental cars, where
          every journey begins and every destination awaits.<br></br>{" "}
          <span>Find Your Perfect Ride Today!</span>{" "}
        </h2>
        <p>
          Discover the freedom of the open road with our diverse fleet of rental
          cars – find your perfect match and embark on your journey with ease.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
