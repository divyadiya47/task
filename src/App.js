import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Employes from "./Pages/Employes";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} /> 
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/Employes" element={<Employes/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;