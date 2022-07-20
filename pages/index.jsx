import ApiAndCard from "../components/ApiAndCard";
import ContainerWithPicture from "../components/ContainerWithPicture";
import GetStart from "../components/GetStart";
import Nav from "../components/Nav";
import { NavContainer } from "../styledComponent/Nav.styled";
import { FooterContainer } from "../styledComponent/Footer.styled";
import GlobalStyle,{BodyContainer} from "../styledComponent/Global.styled";

import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <BodyContainer>
        <NavContainer>
          <Nav />
        </NavContainer>
        <div>
          <ContainerWithPicture />
          <ApiAndCard />
          <GetStart />
        </div>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </BodyContainer>
    </>
  );
}
