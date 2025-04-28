import React from "react";
import { Header } from '../Header/Header';
import { Facultad } from '../Facultad/Facultad';
import { Footer } from '../Footer/Foooter';
import styles from './Sold.module.css';

export const Sold =({ isLoggedIn })=> {
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <Facultad isLoggedIn={isLoggedIn}></Facultad>
            <section className={styles.container}>
                <div className={styles.mainMessage}>
                    <p>Hola prueba, Ingresa los datos de tu producto que deseas vender</p>
                </div>

                <div className={styles.formularioSold}>
                    <div className={styles.inputContent}>
                        <input type="image" className={styles.imageInput} placeholder="Haz clic para subir imagen" />
                        <label>Imagen del producto</label>
                    </div>


                    <div className={styles.inputContent}>
                        <input type="text" className={styles.justInput} />
                        <label htmlFor="">Nombre del producto</label>
                    </div>



                    <div className={styles.inputContent}>
                        <input type="text" className={styles.justInput} />
                        <label htmlFor="">Precio</label>
                    </div>



                    <div className={styles.inputContent}>
                        <input type="text" className={styles.justInput} />
                        <label htmlFor="">Tipo de producto</label>
                    </div>


                    <div className={styles.inputContent}>
                        <textarea name="" id="" className={styles.descInput}></textarea>
                        <label htmlFor="">Descripción</label>
                    </div>


                    <input type="submit" value="Publicar producto" className={styles.inputPublished} />
                </div>
            </section>

            <Footer></Footer>
        </div>
    )
}