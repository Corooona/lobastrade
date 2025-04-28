import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Celular = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa numero de telefono</h2>
        <p>El numero ingresado no podra usarse en otra cuenta</p>

        <div className={styles.input}>
          <label>Número</label>
          <input type="text" name="" id="" />

          </div>

        <div className={styles.buttons}>
          <a onClick={() => navigate("/contraRegister")}>Continuar</a>
        </div>

        <div className={styles.end}>
          <a href="">Necesito ayuda</a>
        </div>
      </div>

      <div className={styles.footer}>
        <a href="">Privacidad</a>
        <a href="">Condiciones</a>
      </div>
    </section>
  );
};
