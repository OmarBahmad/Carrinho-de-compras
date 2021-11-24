import React from "react";
import ShopListCards from "../ShopListCards";

import { Container, ContainerSection } from "./style";

import { data } from "../../database";

const ShopList = ({ handleAddItemToCart }) => {
  return (
    <Container>
      <ContainerSection>
        {data.items.map((data) => (
          <ShopListCards
            key={data.uniqueId}
            imageUrl={data.imageUrl}
            name={data.name}
            price={data.price}
            handleAddItemToCart={handleAddItemToCart}
          />
        ))}
      </ContainerSection>
    </Container>
  );
};

export default ShopList;
