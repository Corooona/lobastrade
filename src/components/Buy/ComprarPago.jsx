import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Foooter";
import styles from "./ComprarPago.module.css";
import { useLocation } from "react-router-dom";

export const ComprarPago = ({ car, setCar, isLoggedIn }) => {
    const location = useLocation();  // Obtener el estado pasado
    const { product } = location.state || {};  // Obtener el producto del estado

    const [paymentDetails, setPaymentDetails] = useState({
        name: "",
        email: "",
        creditCard: "",
        address: ""
    });

    const [error, setError] = useState("");  // Para mostrar mensajes de error

    // Función para eliminar un producto del carrito
    const removeProduct = (index) => {
        const updatedCar = car.filter((_, i) => i !== index);  // Eliminar el producto en el índice específico
        setCar(updatedCar);  // Actualizar el estado del carrito
    };

    // Si no hemos recibido un producto de "Comprar", lo agregamos al carrito
    if (product && !car.includes(product)) {
        car.push(product);  // Si el producto no está en el carrito, lo agregamos
    }

    const totalPrice = car.reduce((acc, prod) => acc + parseFloat(prod.price), 0);

    const handleInputChange = (e) => {
        setPaymentDetails({
            ...paymentDetails,
            [e.target.name]: e.target.value
        });
    };

    // Validar el número de tarjeta de crédito (solo números y exactamente 16 dígitos)
    const validateCreditCard = (cardNumber) => {
        // Solo permitir números
        const numericCardNumber = cardNumber.replace(/[^0-9]/g, "");
        if (numericCardNumber.length > 16) {
            setError("El número de tarjeta debe ser de 16 dígitos.");
        } else {
            setError("");  // Limpiar error si es válido
        }
        return numericCardNumber;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar la tarjeta antes de proceder
        if (paymentDetails.creditCard.length !== 16) {
            setError("El número de tarjeta debe ser de 16 dígitos.");
            return;
        }

        alert("Compra realizada con éxito!");
    };

    // Verifica si el usuario ha iniciado sesión antes de permitir la compra
    const handleBuy = () => {
        if (!isLoggedIn) {
            alert("Debes iniciar sesión para comprar.");
        } else {
            // Aquí puedes agregar la lógica para proceder con la compra.
            alert("Compra en proceso...");
        }
    };

    return (
        <div>
            <Header car={car} isLoggedIn={isLoggedIn} />
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
                            <button 
                                className={styles.removeButton}
                                onClick={() => removeProduct(index)}
                            >
                                Eliminar
                            </button>
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
                        onChange={(e) => setPaymentDetails({
                            ...paymentDetails,
                            creditCard: validateCreditCard(e.target.value)
                        })}
                        maxLength="16"  // Limitar a 16 caracteres
                        required
                    />
                    {error && <p className={styles.error}>{error}</p>} {/* Mostrar mensaje de error */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección de Envío"
                        value={paymentDetails.address}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" onClick={handleBuy}>Realizar Compra</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};
