import React, { useState } from "react"
import { Header } from "../Header/Header"
import { Facultad } from "../Facultad/Facultad"
import { Footer } from "../Footer/Foooter"
import { useParams } from "react-router-dom"
import styles from "./Buy.module.css";

import fornitures from '../../data/fornitures.json'
export const Buy = ({ isLoggedIn }) => {
    const { id } = useParams();

    const [car, setCar]=useState([]);

    let product=null;

    if(id>=0 && id<fornitures.length){
        product=fornitures[id].products;
    }else if(id>=0 && secondclothes.length){
        product=secondclothes[id];
    }else if(id>=0 && computing.length){
        product=computing[id];
    }


    const addToCar = (prod) => {
        setCar(prevCar => [...prevCar, prod]); // Esto agrega el producto correctamente al carrito
    };
    
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} car={car}></Header>
            <Facultad isLoggedIn={isLoggedIn}></Facultad>
            <section className={styles.buyContainer}>
                {
                    product.map((prod, id)=>{
                        return <div key={id} className={styles.productCard}>
                            <h1>{prod.name}</h1>
                            <img src={prod.src} alt={prod.name} />
                            <p>{prod.price}</p>

                            <div className={styles.buttonsBuy}>
                            <button onClick={()=>{addToCar(prod)}}>
                                Agregar al carrito
                            </button>

                            <button>
                                Comprar
                            </button>
                            </div>
                            
                        </div>
                    })
                }
            </section>
            <Footer></Footer>
        </div>
    )
}