import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
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
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
