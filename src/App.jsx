import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import Detail from "./Detail";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find((item) => item.sku === sku);
      if (itemInCart) {
        // Return new array with the correct item replaced.
        return items.map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Return new array with the new item added in.
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {
    setCart((items) => {
      // check if the quantity is 0, if yes, remove item, if not return new array.

      return quantity === 0
        ? items.filter((item) => item.sku !== sku)
        : items.map((item) =>
            item.sku === sku ? { ...item, quantity } : item
          );
    });
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<h1>Welcome to Carved Rock Fitness! </h1>}
            />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} updateQuantity={updateQuantity} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
