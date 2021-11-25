import React from "react";
import ShopListCards from "../ShopListCards";

import { Container, ContainerSection } from "./style";

import { data } from "../../database";

const ShopList = () => {
  return (
    <Container>
      <ContainerSection>
        {data.items.map((data) => (
          <ShopListCards
            key={data.uniqueId}
            imageUrl={data.imageUrl}
            name={data.name}
            price={data.price}
          />
        ))}
      </ContainerSection>
    </Container>
  );
};

export default ShopList;
