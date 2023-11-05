import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog/catalog";
import Home from "./Pages/Home/home";
import Item from "./Pages/Camera/camera";
import axios from 'axios';
import Cart from './Pages/Cart/cart';
import { useEffect, useState } from "react";
function App() {
   const [camera, setcamera] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:8090/cameras").then((response) => {
            setcamera(response.data);
         })
   }, []);

   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog data={camera} />} />
            {camera.map((el) => { return <Route key={el.id} path={`/catalog/${el.id}`} element={<Item />} /> })}
         <Route path="/cart" element={<Cart />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;