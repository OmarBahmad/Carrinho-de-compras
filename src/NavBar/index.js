import React from "react";

import {
  Container,
  Nav,
  Logo,
  ContainerActions,
  ContainerTotalValue,
  ContainerButtons,
  Total,
  Price,
  Button,
} from "./style";

const NavBar = ({ cart }) => {
  const totalPrice = cart.reduce((acc, actual) => acc + actual.price / 100, 0);
  return (
    <Container>
      <Nav>
        <Logo>TRUFAS</Logo>
        <ContainerActions>
          <ContainerTotalValue>
            <Total>
              {cart.length} {cart.length === 1 ? "Trufa" : "Trufas"}
            </Total>
            <Price>R$ {totalPrice.toFixed(2)}</Price>
          </ContainerTotalValue>
          <ContainerButtons>
            {/* <Button>limpar</Button> */}
            <Button>CARRINHO</Button>
          </ContainerButtons>
        </ContainerActions>
      </Nav>
    </Container>
  );
};

export default NavBar;
