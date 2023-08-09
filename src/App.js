import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaContextProvider from "./context/PizzaContext";

export default function App() {
  return (
    <PizzaContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PizzaContextProvider>
  );
}
