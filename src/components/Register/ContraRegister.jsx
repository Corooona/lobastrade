import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./ContraRegister.module.css";

export const ContraRegister=({ onLogin })=>{
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
           <h2>Ingresa una contraseña</h2>
           <p>Recuerda la contraseña que vayas a ingresar</p>
   
           <div className={styles.input}>
             <label>Contraseña</label>
             <input type="text" name="" id="" />
           </div>
   
           <div className={styles.buttons}>
             <a onClick={
              handleSession} >Continuar</a>
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
}