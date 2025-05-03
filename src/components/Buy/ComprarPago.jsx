import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Foooter";
import styles from "./ComprarPago.module.css";

export const ComprarPago = ({ car }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    creditCard: "",
    address: ""
  });

  const totalPrice = car.reduce((acc, prod) => acc + parseFloat(prod.price), 0);

  const handleInputChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra realizada con éxito!");
    
  };

  return (
    <div>
      <Header car={car} />
      <div className={styles.container}>
        <h1>Resumen de tu compra</h1>
        <section className={styles.cartItems}>
          {car.map((prod, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={prod.src} alt={prod.name} />
              <div>
                <h3>{prod.name}</h3>
                <p>Precio: ${prod.price}</p>
              </div>
            </div>
          ))}
        </section>

        <div className={styles.total}>
          <h2>Total: ${totalPrice}</h2>
        </div>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <h2>Detalles de pago</h2>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={paymentDetails.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={paymentDetails.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="creditCard"
            placeholder="Número de Tarjeta de Crédito"
            value={paymentDetails.creditCard}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección de Envío"
            value={paymentDetails.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Realizar Compra</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
