import React from "react"
import {Header} from "../Header/Header"
import { Facultad } from "../Facultad/Facultad"
import { Footer } from "../Footer/Foooter"
export const Buy=({isLoggedIn})=>{
    return(
        <div>
            <Header isLoggedIn={isLoggedIn}></Header>
            <Facultad isLoggedIn={isLoggedIn}></Facultad>
            <section>

            </section>
            <Footer></Footer>
        </div>
    )
}