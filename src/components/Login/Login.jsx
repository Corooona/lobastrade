import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa tu e-mail o teléfono para iniciar sesión</h2>

        <div className={styles.input}>
          <label>E-mail o telefono</label>
          <input type="text" name="" id="" />
        </div>

        <div className={styles.buttons}>
          <a onClick={()=>navigate("/contra")} >Continuar</a>
          <a onClick={()=>navigate("/register")}>Crear cuenta</a>
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
