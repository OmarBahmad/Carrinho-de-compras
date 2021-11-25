import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItems from "../CartItems";

import {
  Container,
  ContainerCard,
  Title,
  BoxContainer,
  ContainerTotalPrice,
  FillContainer,
  ContainerFrete,
  Button,
} from "./style";

const Cart = () => {
  const router = useRouter();
  const { cart, handleClearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, actual) => acc + actual.price / 100, 0);

  return (
    <Container>
      <BoxContainer>
        <Title>
          <h1>Meu carrinho</h1>
        </Title>
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
        <FillContainer>
          <ContainerTotalPrice>
            <h2>Total</h2>
            <h2>R$ {totalPrice.toFixed(2)}</h2>
          </ContainerTotalPrice>
          {totalPrice.toFixed(2) > 10 && (
            <ContainerFrete>
              <span>Parabéns, sua compra tem frete grátis !</span>
            </ContainerFrete>
          )}
        </FillContainer>
        <Button
          onClick={() => {
            router.push("/");
            handleClearCart();
          }}
        >
          Finalizar Compra
        </Button>
      </BoxContainer>
    </Container>
  );
};

export default Cart;
