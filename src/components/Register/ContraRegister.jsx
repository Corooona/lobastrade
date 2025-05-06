import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./ContraRegister.module.css";

export const ContraRegister = ({ onLogin }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); // Estado para la contraseña

  // Función para manejar el cambio en el input de la contraseña
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Función para manejar la sesión
  const handleSession = () => {
    if (password) {
      // Obtener los datos previos (correo, teléfono, nombre, apellido, facultad)
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

      if (userDetails) {
        // Guardar todos los detalles en sessionStorage, incluyendo la contraseña
        sessionStorage.setItem("userDetails", JSON.stringify({
          ...userDetails,
          password
        }));

        // Realizar acción de login (si es necesario)
        onLogin();
        navigate('/'); // Navegar a la página de inicio o donde desees
      } else {
        alert("Por favor ingrese los datos previos.");
      }
    } else {
      alert("Por favor ingrese una contraseña.");
    }
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <h2>Ingresa una contraseña</h2>
        <p>Recuerda la contraseña que vayas a ingresar</p>

        <div className={styles.input}>
          <label>Contraseña</label>
          <input
            type="password" // Mejor usar tipo "password" para ocultar la entrada
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleSession}>Continuar</a>
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
