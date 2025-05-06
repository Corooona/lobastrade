import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Celular = () => {
  const navigate = useNavigate();
  const [telefono, setTelefono] = useState("");

  const handleTelefonoChange = (e) => {
    const value = e.target.value;

    // Asegurarse de que solo se ingresen números y no más de 10 caracteres
    if (/^\d{0,10}$/.test(value)) {
      setTelefono(value);
    }
  };

  const handleContinue = () => {
    if (telefono.length === 10) {
      const userEmail = JSON.parse(sessionStorage.getItem("userEmail"));
      if (userEmail) {
        sessionStorage.setItem("userDetails", JSON.stringify({ ...userEmail, telefono }));
        navigate("/nameRegister");
      } else {
        alert("Ingrese un correo primero");
      }
    } else {
      alert("Por favor ingrese un teléfono de 10 dígitos");
    }
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa número de teléfono</h2>
        <p>El número ingresado no podrá usarse en otra cuenta</p>

        <div className={styles.input}>
          <label>Número</label>
          <input
            type="text" // Se usa "text" para poder controlar la validación
            value={telefono}
            onChange={handleTelefonoChange}
            maxLength="10" // Limita la longitud a 10 caracteres
            required
          />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleContinue}>Continuar</a>
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
