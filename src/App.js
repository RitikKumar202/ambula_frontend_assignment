import React, { useState, useEffect } from "react";
import data from "./components/shoppingCart/back/data/Data";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/shoppingCart/front/Products";
import Cart from "./components/shoppingCart/front/Cart";
import Weather from "./components/weather/Weather";
import About from "./components/About";
import Todo from "./components/ToDo/Todo";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  const todosInitialState = JSON.parse(localStorage.getItem("todos")) || [];
  const cartItemsInitialState =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartItems, setCartItems] = useState(cartItemsInitialState);
  const { productItems } = data;

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(todosInitialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [todos, cartItems]);

  const handleAddProduct = (product) => {
    const existProduct = cartItems.find((item) => item.id === product.id);
    if (existProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existProduct, quantity: existProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const existProduct = cartItems.find((item) => item.id === product.id);
    if (existProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existProduct, quantity: existProduct.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ------------- Shopping Cart Routes ---------- */}
          <Route
            path="/shopping"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
          {/* ------------- Shopping Cart Routes ---------- */}

          {/* ------- Todo Routes ------- */}
          <Route
            path="/todo"
            element={
              <Todo
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
            }
          />

          {/* ------- Weather Routes ------- */}
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
