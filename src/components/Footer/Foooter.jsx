import React from "react";
import logo from "../../assets/Header/lobastrade.png";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.selfLobas}>
        <img src={logo} alt="LobasTrade" />

        <h3>Somos los nenis de confianza</h3>
      </div>

      <div className={styles.firstLinks}>
        <div className={styles.left}>
          <ul>
            <li>
              <a href="">Mi cuenta</a>
            </li>
            <li>
              <a href="">Categorias</a>
            </li>
            <li>
              <a href="">Mis listas</a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <a href="">Vender</a>
            </li>
            <li>
              <a href="">Alertas de revision y de seguridad del producto</a>
            </li>
            <li>
              <a href="">Atencion al acliente</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.secondLinks}>
        
            <a href="">Condiciones de uso</a>
         
            <a href="">Aviso de privacidad</a>
        
            <a href="">Valoración</a>
          
      </div>
    </footer>
  );
};
