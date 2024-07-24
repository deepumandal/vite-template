import { Block } from "@UI/Block";
import { Container } from "@UI/Container";
import { Flex } from "@UI/Flex";
import { Grid, GridItem } from "@UI/Grid";

const App = () => (
  <Container asElement="footer" ScreenType="container" fullHeight>
    <Container asElement="nav" ScreenType="container">
      1
    </Container>
    <Container asElement="nav" ScreenType="full-screen" role="navigation">
      <Flex
        asElement="section"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Block asElement="div">hello</Block>
        <Block asElement="div"> world</Block>
      </Flex>
    </Container>
    <Container asElement="main" ScreenType="container">
      <Grid asElement="div" gridLines columns={4} gap={10}>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
        <GridItem>8</GridItem>
      </Grid>
    </Container>
  </Container>
);
export default App;
