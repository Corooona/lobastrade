import React, {useState} from "react";

import styles from "./Header.module.css";

import logo from "../../assets/Header/lobastrade.png";
import car from "../../assets/Header/car.png";
import bar from "../../assets/Header/bar.png";
import openbar from "../../assets/Header/openbar.png";

import { Menu } from "./Menu";

export const Header = ({isLoggedIn, onLogin}) => {
    const [menuOpen, setMenuOpen]=useState(false);
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
        onClick={()=>setMenuOpen(!menuOpen)} 
        alt="Bar" className={styles.bar} />
        <img src={car} alt="Car" className={styles.car} />

      </div>

      {menuOpen && <Menu isLoggedIn={isLoggedIn} onLogin={onLogin} />}

    </header>
  );
};


