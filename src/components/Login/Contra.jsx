import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Contra.module.css";
import picture from '../../assets/Header/Menu/profile.png';

export const Contra = ({ onLogin }) => {
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSession = () => {
    const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    
    if (storedUserDetails && storedUserDetails.password === password) {
      // Si la contraseña es correcta, iniciamos sesión
      onLogin();
      navigate('/');
    } else {
      alert("Contraseña incorrecta.");
    }
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
      </div>

      <div className={styles.content}>
        <div className={styles.profile}>
          <img src={picture} alt="profilepicture" />
          <p>{JSON.parse(sessionStorage.getItem("userDetails")).email}</p>
        </div>
        <h2>Ingresa tu contraseña</h2>

        <div className={styles.input}>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className={styles.buttons}>
          <a onClick={handleSession}>Iniciar Sesión</a>
          <a>Olvidé la contraseña</a>
        </div>
      </div>
    </section>
  );
};
