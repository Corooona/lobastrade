import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Contra.module.css";
import picture from '../../assets/Header/Menu/profile.png'

export const Contra = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSession = () => {
    onLogin();
    navigate('/');
  };
  
  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <div className={styles.profile}>
    <img src={picture} alt="profilepicture" />
    <p>prueba@gmail.com</p>
        </div>
        <h2>Ingresa tu contraseña</h2>

        <div className={styles.input}>
          <label>E-mail o telefono</label>
          <input type="text" name="" id="" />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleSession}>Iniciar Sesión</a>
          <a>Olvidé la contraseña</a>
        </div>
      </div>

    </section>
  );
};
