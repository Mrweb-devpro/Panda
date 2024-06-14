import styled from "styled-components";
import Hero from "./sections/Hero";
import GlobalStyles from "./style/GlobalStyles";
import News from "./sections/News";
import Contribution from "./sections/Contribution";
import Footer from "./sections/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Hero />
      <News />
      <Contribution />
      <Footer/>
    </Container>
  );
}

export default App;
