import React, { useState } from "react";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import carrito from "../../assets/Header/car.png";
import bar from "../../assets/Header/bar.png";
import openbar from "../../assets/Header/openbar.png";

import { Menu } from "./Menu";

export const Header = ({ isLoggedIn, onLogin, car }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCarOpen, setIsCarOpen] = useState(false);
  const carCount = car.length;

  const toggleCar = () => {
    setIsCarOpen(!isCarOpen);  // Cambiar el estado al hacer clic en el carrito
  };
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="LobasTrade" />
      </div>

      <div className={styles.input}>
        <input type="text" placeholder="Buscar" />
      </div>

      <div className={styles.assets}>
        <img
          src={menuOpen ? openbar : bar}
          onClick={() => setMenuOpen(!menuOpen)}
          alt="Bar" className={styles.bar} />
        <img src={carrito} alt="Car" className={styles.car}
          onClick={toggleCar} />
        {
          carCount > 0 && (
            <div className={styles.Carcount}>
              {carCount}
            </div>
          )
        }
      </div>

      {menuOpen && <Menu isLoggedIn={isLoggedIn} onLogin={onLogin} />}

      {/* Mostrar el carrito si está abierto */}
      {isCarOpen && (
        <div className={styles.carDetails}>
          <h2>Carrito</h2>
          <ul>
            {car.map((prod, id) => (
              <li key={id}>
                <img src={prod.src} alt={prod.name} />
                <div>{prod.name}</div>
                <div>{prod.price}</div>
              </li>
            ))}
          </ul>
          <Link to="/comprar-pago">
          <button>
            Comprar
          </button>
          </Link>
          
        </div>
      )}
    </header>
  );
};


