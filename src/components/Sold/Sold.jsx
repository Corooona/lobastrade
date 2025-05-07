import React, { useState } from "react";
import { Header } from '../Header/Header';
import { Facultad } from '../Facultad/Facultad';
import { Footer } from '../Footer/Foooter';
import styles from './Sold.module.css';

export const Sold = ({ isLoggedIn }) => {
  const [car, setCar] = useState([]);  // Inicializa un array vacío para el carrito
  const [price, setPrice] = useState("");  // Estado para el precio

  const handlePriceChange = (e) => {
    let value = e.target.value;

    // Permitir números y un solo punto decimal
    // No permitir que el número tenga más de 2 decimales
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setPrice(value);
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();

    // Verificar que todos los campos estén llenos (esto puede expandirse según los campos requeridos)
    alert("Producto publicado");
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} car={car} />
      <Facultad isLoggedIn={isLoggedIn}></Facultad>
      <section className={styles.container}>
        <div className={styles.mainMessage}>
          <p>Hola, Ingresa los datos de tu producto que deseas vender</p>
        </div>

        <div className={styles.formularioSold}>
          <div className={styles.inputContent}>
            <input type="file" className={styles.imageInput} />
            <label>Imagen del producto</label>
          </div>

          <div className={styles.inputContent}>
            <input type="text" className={styles.justInput} />
            <label>Nombre del producto</label>
          </div>

          <div className={styles.inputContent}>
            <input 
              type="text" 
              className={styles.justInput} 
              value={price}  // Muestra el valor ingresado
              onChange={handlePriceChange} 
              required
            />
            <label>Precio</label>
          </div>

          <div className={styles.inputContent}>
            <input type="text" className={styles.justInput} />
            <label>Tipo de producto</label>
          </div>

          <div className={styles.inputContent}>
            <textarea name="" id="" className={styles.descInput}></textarea>
            <label>Descripción</label>
          </div>

          <input 
            type="submit" 
            value="Publicar producto" 
            className={styles.inputPublished} 
            onClick={handlePublish} 
          />
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};
