import React from "react";
import styles from "./Menu.module.css";

import picture from "../../assets/Header/Menu/profile.png";
import home from "../../../public/Menu/home.png";
import offers from "../../../public/Menu/offers.png";
import categories from "../../../public/Menu/categories.png";
import support from "../../../public/Menu/support.png";
import sell from "../../../public/Menu/sell.png";
import exit from "../../../public/Menu/exit.png";

import { useNavigate } from "react-router-dom";

export const Menu = ({ isLoggedIn, onLogin }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.menu}>
      <div className={styles.user}>
        <div className={styles.picture}>
          <img src={picture} alt="profilepicture" />
        </div>

        <div className={styles.infoUser}>
          <h3>{isLoggedIn ? "Prueba" : "Bienvenido"}</h3>

          {isLoggedIn ? (
            <a className={styles.linkProfile} onClick={navigate('/profile')} >Mi perfil</a>
          ) : (
            <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p>
          )}

          {!isLoggedIn && (
            <div className={styles.buttons}>
              <a onClick={() => navigate("/login")}>Ingresar</a>
              <a onClick={() => navigate("/register")}>Crear cuenta</a>
            </div>
          )}

          {isLoggedIn && (
            <div className={styles.personalizeProfileMessage}>
              <p>Recuerda que puedes personalizar tu perfil</p>
            </div>
          )
          }
        </div>
      </div>

      <div className={isLoggedIn ? styles.listDivLog : styles.listDiv}>
        <ul className={styles.list}>
          <li>
            <img src={home} alt="Home" />
            <a href="">Inicio</a>
          </li>
          <li>
            <img src={offers} alt="Offers" />
            <a href="">Ofertas</a>
          </li>

          <li>
            <img src={categories} alt="Categories" />
            <a href="">Categorias</a>
          </li>

          <li>
            <img src={support} alt="Support" />
            <a href="">Soporte</a>
          </li>

          {isLoggedIn ? (
            <li>
              <img src={sell} alt="" />
              <a href="">Vender</a>
            </li>
          ) : (
            ""
          )}

          {isLoggedIn ? (
            <li onClick={()=>{
              onLogin(false); navigate('/');
            }}>
              <img src={exit} alt="" />
              <a href="">Exit</a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};
