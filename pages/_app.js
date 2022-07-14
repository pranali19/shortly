import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import {
  BodyContainer,
  NavContainer,
  FooterContainer,
} from "../components/styledComponent/Containers";
import Footer from "../components/Footer";
import GlobalStyle from "../components/styledComponent/GlobalStyle";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <BodyContainer>
        <GlobalStyle />
        <NavContainer>
          <Nav />
        </NavContainer>
        <Component {...pageProps} />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </BodyContainer>
    </>
  );
}

export default MyApp;
