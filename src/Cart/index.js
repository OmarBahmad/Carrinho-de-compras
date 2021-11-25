import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItems from "../CartItems";

import { Container, ContainerCard } from "./style";

const Cart = () => {
  const { cart } = useContext(CartContext);
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
          />
        ))}
      </ContainerCard>
    </Container>
  );
};

export default Cart;
