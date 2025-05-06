import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Register.module.css";

export const Name=()=>{
   const navigate = useNavigate();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [faculty, setFaculty] = useState("Computación");

   const handleFirstNameChange = (e) => setFirstName(e.target.value);
   const handleLastNameChange = (e) => setLastName(e.target.value);
   const handleFacultyChange = (e) => setFaculty(e.target.value);

   const handleContinue = () => {
    if (firstName && lastName){
      // Obtener los datos previamente guardados (correo, teléfono)
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
      
      if (userDetails) {
        // Guardar todos los detalles en el sessionStorage
        sessionStorage.setItem("userDetails", JSON.stringify({
          ...userDetails, 
          firstName, 
          lastName, 
          faculty
        }));

        navigate("/contraRegister"); // Navegar a la siguiente página
      } else {
        alert("Por favor ingrese los datos previos.");
      }
    
    }else {
        alert("Por favor ingrese un nombre y un apellido.");
      }

   }

     return (
       <section className={styles.loginContainer}>
         <div className={styles.header}>
           <img src={logo} onClick={() => navigate("/")} alt="LobasTrade" />
         </div>
   
         <div className={styles.content}>
           <h2>Elige un nombre para ti o tu negocio</h2>
   
           <div className={styles.input}>
             <label>Nombre</label>
             <input 
              type="text" 
              value={firstName} 
              onChange={handleFirstNameChange} 
              required 
             />

             <label>Apellido</label>
             <input type="text" 
             value={lastName} 
             onChange={handleLastNameChange} 
             required 
             />

             <label>Facultad</label>
             <input 
             type="text" 
             value={faculty} 
             onChange={handleFacultyChange} 
             disabled 
             />
           </div>
   
           <div className={styles.buttons}>
             <a onClick={handleContinue} >Continuar</a>
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