import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Register=()=>{
   const navigate = useNavigate();
     return (
       <section className={styles.loginContainer}>
         <div className={styles.header}>
           <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
         </div>
   
         <div className={styles.content}>
           <h2>Ingresa tu e-mail</h2>
   
           <div className={styles.input}>
             <label>E-mail o telefono</label>
             <input type="text" name="" id="" />
           </div>
   
           <div className={styles.buttons}>
             <a onClick={()=>{
              
              navigate("/nameRegister");}} >Continuar</a>
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