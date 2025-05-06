import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState(""); // Estado para correo 
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    // Verificamos si el correo ingresado coincide con el que tenemos almacenado en sessionStorage
    const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    
    if (storedUserDetails && (storedUserDetails.email === email )) {
      navigate("/contra"); // Si el usuario existe, navegamos a la página de la contraseña
    } else {
      alert("Correo incorrecto.");
    }
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa tu e-mail para iniciar sesión</h2>

        <div className={styles.input}>
          <label>E-mail o teléfono</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleContinue}>Continuar</a>
          <a onClick={() => navigate("/register")}>Crear cuenta</a>
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
