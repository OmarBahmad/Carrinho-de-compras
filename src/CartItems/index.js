import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
  Container,
  Button,
  ContainerCart,
  ContainerNameValue,
  Name,
  Price,
  Img,
} from "./style";

const CartItems = ({ imageUrl, name, price, index }) => {
  const { handleRemoveItemFromCart } = useContext(CartContext);
  return (
    <Container>
      <ContainerCart>
        <Img src={imageUrl} title={name} />
        <ContainerNameValue>
          <Name>{name}</Name>
          <Price> R${parseFloat(price / 100).toFixed(2)}</Price>
        </ContainerNameValue>
        <Button onClick={() => handleRemoveItemFromCart(index)}>REMOVER</Button>
      </ContainerCart>
    </Container>
  );
};

export default CartItems;
