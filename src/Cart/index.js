import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import swal from "sweetalert";
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
            if (cart.length === 0) {
              swal({
                text: "Você não selecionou nenhuma das nossas deliciosas Trufas!",
                icon: "warning",
                title: "Volte para a loja!",
              }).then(() => {
                handleClearCart();
                router.push("/");
              });
            } else {
              swal({
                text: " Compra efetuada com sucesso! \n  \n  Iremos esvaziar o seu carrinho para que você possa saborear mais!",
                icon: "success",
                title: "Parabéns!",
              }).then(() => {
                handleClearCart();
                router.push("/");
              });
            }
          }}
        >
          Finalizar Compra
        </Button>
      </BoxContainer>
    </Container>
  );
};

export default Cart;
