import React from "react";
import styles from "./Facultad.module.css";
import location from "../../assets/Facultad/location.png";
export const Facultad = ({isLoggedIn, OnLogin}) => {
  return (
    <section className={styles.container}>
      <div className={styles.location}>
        <img src={location} alt="Location" />
      </div>

      <div className={styles.message}>
        <p>{isLoggedIn ? "Facultad Ciencias de la computación" : "Inicie sesion para ver articulos cercanos a tu facultad"}</p>
      </div>
    </section>
  );
};
