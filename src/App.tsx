import { Block } from "@UI/Block";
import { Container } from "@UI/Container";
import { Flex } from "@UI/Flex";

const App = () => (
  <Container asElement="footer" ScreenType="container" fullHeight>
    <Container asElement="nav" ScreenType="full-screen" role="navigation">
      <Flex
        asElement="section"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Block asElement="div"> hello</Block>
        <Block asElement="div"> world</Block>
      </Flex>
    </Container>
  </Container>
);
export default App;
