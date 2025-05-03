import React from "react";
import propaganda1 from "../../assets/Body/propaganda1.png";
import propaganda2 from "../../assets/Body/propaganda2.png";

import styles from "./BodyPage.module.css";
import fornitures from "../../data/fornitures.json";
import secondclothes from "../../data/secondclothes.json";
import computing from "../../data/computacion.json";

import { Link } from "react-router-dom";

export const BodyPage = ({ isLoggedIn }) => {
  return (
    <section>
      <div>
        <img src={propaganda1} alt="" />
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Eres foraneo? Revisa los muebles</h2>

        <div className={styles.fornitures}>
          {fornitures.map((forniture, id) => {
            return (
              <div key={id} className={styles.forniture}>
                <div
                  className={`${styles.fornitureImg} ${
                    styles[forniture.class]
                  }`}
                >
                  <img src={forniture.src} alt={forniture.name} />
                </div>
                
                <Link to={`/buy/${id}`}>Comprar</Link>
                
                <p>{forniture.name}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.verMas}>
          <a href="">Ver más</a>
        </div>
      </div>

      <div className={styles.container}>
             {/* Si está logueado mostramos computación, sino ropa de segunda */}
        <h2 className={styles.title}>
        {isLoggedIn
            ? "Artículos de Computación para tu Facultad"
            : "Ropa de segunda mano de la manada"}
        </h2>
        <div className={styles.clothes}>
          { (isLoggedIn ? computing : secondclothes).map((item, id) => {
            return (
              <div key={id} className={styles.cloth}>
                <div className={ isLoggedIn ? styles.computingImg : styles.clothImg}>
                  <img src={item.url} alt={item.name} />
                </div>

                <div className={styles.name}>
                  <p>{item.name}</p>
                </div>

                <div className={styles.price}>  
                  <p className={styles.price}>{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.verMas}>
          <a href="">Ver más</a>
        </div>
      </div>

      <div>
        <img src={propaganda2} alt="Propaganda" />
      </div>
    </section>
  );
};
