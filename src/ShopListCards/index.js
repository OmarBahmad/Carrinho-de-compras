import React from "react";

import { Container, Button, Img, ContainerTotalValue } from "./style";

const ShopListCards = ({ imageUrl, name, price, handleAddItemToCart }) => {
  return (
    <Container>
      <Img src={imageUrl} title={name} />
      <ContainerTotalValue>
        <h1>{name}</h1>
        <h2>R${parseFloat(price / 100).toFixed(2)}</h2>
      </ContainerTotalValue>
      <Button onClick={() => handleAddItemToCart(imageUrl, name, price)}>
        Adicionar à lista
      </Button>
    </Container>
  );
};

export default ShopListCards;
