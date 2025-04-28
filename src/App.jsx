// Styles
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Facultad } from "./components/Facultad/Facultad";
import { Categories } from "./components/Categories/Categories";
import { BodyPage } from "./components/BodyPage/BodyPage";
import { Footer } from "./components/Footer/Foooter";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Contra } from "./components/Login/Contra";
import { Register } from "./components/Register/Register";
import { Name } from "./components/Register/Name";
import { Celular } from "./components/Register/Celular";
import { ContraRegister } from "./components/Register/ContraRegister";
import { Profile } from "./components/Profile/Profile";
import { Sold } from "./components/Sold/Sold";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.App}>
              <Header isLoggedIn={isLoggedIn} onLogin={handleLogin}></Header>
              <Facultad isLoggedIn={isLoggedIn}></Facultad>
              <Categories></Categories>
              <BodyPage isLoggedIn={isLoggedIn}></BodyPage>
              <Footer></Footer>
            </div>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/contra" element={<Contra onLogin={handleLogin} />}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/nameRegister" element={<Name />}></Route>

        <Route path="/celRegister" element={<Celular/>}></Route>

        <Route path="/contraRegister" element={< ContraRegister />}></Route>

        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />}></Route>

        <Route path="/sold" element={<Sold isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
