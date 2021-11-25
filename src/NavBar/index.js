import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../../contexts/CartContext";

import {
  Container,
  Nav,
  Logo,
  ContainerButtons,
  Img,
  TotalItems,
  ContainerActions,
  ContainerTotalValue,
  Total,
  Price,
  Button,
} from "./style";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, actual) => acc + actual.price / 100, 0);
  const router = useRouter();

  return (
    <Container>
      <Nav>
        <Logo>TRUFAS</Logo>
        {/* <ContainerActions> */}
        {/* <ContainerTotalValue>
            <Total>
              {cart.length} {cart.length === 1 ? "Trufa" : "Trufas"}
            </Total>
            <Price>R$ {totalPrice.toFixed(2)}</Price>
          </ContainerTotalValue> */}
        <ContainerButtons>
          {/* <Button>limpar</Button> */}
          {/* <Button
            onClick={() => {
              router.push("/cartlist");
            }}
          >
            CARRINHO
          </Button> */}
          <Link href="/cartlist">
            <Img src="/shopping-cart.svg" alt="" />
          </Link>
          <TotalItems>{cart.length}</TotalItems>
        </ContainerButtons>
        {/* </ContainerActions> */}
      </Nav>
    </Container>
  );
};

export default NavBar;
