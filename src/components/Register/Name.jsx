import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Name=()=>{
   const navigate = useNavigate();
     return (
       <section className={styles.loginContainer}>
         <div className={styles.header}>
           <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
         </div>
   
         <div className={styles.content}>
           <h2>Elige un nombre para ti o tu negocio</h2>
   
           <div className={styles.input}>
             <label>Nombre</label>
             <input type="text" name="" id="" />

             <label>Apellido</label>
             <input type="text" name="" id="" />

             <label>Facultad</label>
             <input type="text" name="" id="" value={"Computación"} />
           </div>
   
           <div className={styles.buttons}>
             <a onClick={()=>navigate("/celRegister")} >Continuar</a>
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