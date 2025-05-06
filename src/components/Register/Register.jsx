import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    // Validar si el correo tiene un formato adecuado
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (email && emailRegex.test(email)) {
      sessionStorage.setItem("userEmail", JSON.stringify({ email }));
      navigate("/celRegister");
    } else {
      alert("Por favor ingrese un correo válido.");
    }
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa tu e-mail</h2>

        <div className={styles.input}>
          <label>E-mail</label>
          <input
            type="email" 
            name="email"
            id="email"
            value={email} 
            onChange={handleEmailChange} 
            required
          />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleContinue}>Continuar</a>
        </div>

        <div className={styles.end}>
          <a>Necesito ayuda</a>
        </div>
      </div>

      <div className={styles.footer}>
        <a href="">Privacidad</a>
        <a href="">Condiciones</a>
      </div>
    </section>
  );
};
