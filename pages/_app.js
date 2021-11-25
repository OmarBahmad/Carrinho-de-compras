import { GlobalStyle } from "../styles/globals";
import ShoppingCart from "./index";
import Head from "next/head";
import { CartProvider } from "../contexts/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
