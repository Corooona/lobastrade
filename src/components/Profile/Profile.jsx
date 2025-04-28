import React from "react";

import { Header } from "../Header/Header";
import {Footer} from "../Footer/Foooter"
import picture from "../../assets/Header/Menu/profile.png";
import styles from "./Profile.module.css";

import data from "../../../public/MenuLogueado/data.png";
import ubication from "../../../public/MenuLogueado/ubication.png";
import contact from "../../../public/MenuLogueado/contact.png";

import camera from "../../../public/MenuLogueado/camera.png";

export const Profile = (isLoggedIn = { isLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />

      <section>
        <div className={styles.headerContainer}>
          <div className={styles.imgProfile}>
            <img
              className={styles.picture}
              src={picture}
              alt="Profile Picture"
            />
            <img className={styles.camera} src={camera} alt="" />
          </div>

          <div className={styles.textContainer}>
            <h3>Prueba</h3>
            <p>prueba@gmail.com</p>
          </div>
        </div>

        <div className={styles.options}>
          <div className={styles.option}>
            <div className={styles.dataImg}>
              <img src={data} alt="Data profile" />
            </div>
            <div className={styles.dataText}>
              <h3>Datos de tu cuenta</h3>
              <p>Actualiza datos de tu cuenta en lobas trade</p>
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.dataImg}>
              <img src={ubication} alt="Data ubication" />
            </div>
            <div className={styles.dataText}>
              <h3>Facultad</h3>
              <p>
                Si deseas ver productos de otra facultad en tu inicio, puedes
                cambiarlo
              </p>
            </div>
          </div>

          <div className={styles.option}>
            <div className={styles.dataImg}>
              <img src={contact} alt="Data contact" />
            </div>
            <div className={styles.dataText}>
              <h3>Contacto</h3>
              <p>
                Si deseas ver productos de otra facultad en tu inicio, puedes
                cambiarlo
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};
