import { Block } from "@UI/Block";
import { Container } from "@UI/Container";
// import { Flex } from "@UI/Flex";

const App = () => (
  <Container border ScreenType="full-screen">
    <Container asElement="nav" border>
      {/* <Flex justifyContent="center" asElement="section"> */}
      <Block asElement="div"> hello</Block>
      <Block asElement="div"> world</Block>
      {/* </Flex> */}
    </Container>
  </Container>
);
export default App;
