import React from "react";
import CartItems from "../CartItems";

import { Container, ContainerCard } from "./style";

const Cart = ({ cart, handleRemoveItemFromCart }) => {
  return (
    <Container>
      <ContainerCard>
        {cart.map((data, index) => (
          <CartItems
            key={data.uniqueId}
            index={index}
            imageUrl={data.imageUrl}
            name={data.name}
            price={data.price}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Cart;
