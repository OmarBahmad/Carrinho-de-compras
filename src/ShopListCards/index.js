import React from "react";

import { Container, Button, Img } from "./style";

const ShopListCards = ({ imageUrl, name, price, handleAddItemToCart }) => {
  return (
    <Container>
      <Img src={imageUrl} title={name} />
      <h1>{name}</h1>
      <h5>R${parseFloat(price / 100).toFixed(2)}</h5>
      <Button onClick={() => handleAddItemToCart(imageUrl, name, price)}>
        Comprar
      </Button>
    </Container>
  );
};

export default ShopListCards;
