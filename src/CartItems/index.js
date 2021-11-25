import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
  Container,
  Button,
  ContainerTotalValue,
  Total,
  Price,
  Img,
} from "./style";

const CartItems = ({ imageUrl, name, price, index }) => {
  const { handleRemoveItemFromCart } = useContext(CartContext);
  return (
    <Container>
      <ContainerTotalValue>
        <Img src={imageUrl} title={name} />
        <Total>{name}</Total>
        <Price> R${parseFloat(price / 100).toFixed(2)}</Price>
      </ContainerTotalValue>
      <Button onClick={() => handleRemoveItemFromCart(index)}>REMOVER</Button>
    </Container>
  );
};

export default CartItems;
