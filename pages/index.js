import React, { useState } from "react";
import NavBar from "../src/NavBar";
import ShopList from "../src/ShopList";
import Cart from "../src/Cart";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(imageUrl, name, price) {
    const product = {
      imageUrl,
      name,
      price,
    };
    setCart([...cart, product]);
  }
  function handleRemoveItemFromCart(itemIndex) {
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== itemIndex
    );
    setCart(filteredCart);
  }
  function handleClearCart() {
    setCart([]);
  }
  return (
    <>
      <NavBar cart={cart} />
      <ShopList handleAddItemToCart={handleAddItemToCart} />
      <Cart cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
    </>
  );
};

export default ShoppingCart;
