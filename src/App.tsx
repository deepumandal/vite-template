import { Block } from "@UI/Block";
import { Container } from "@UI/Container";
import { Flex } from "@UI/Flex";
import { Grid, GridItem } from "@UI/Grid";
import Typography from "@UI/Typography/Typography";

const App = () => (
  <Container
    asElement="footer"
    ScreenType="container"
    fullHeight
    className="px-20"
  >
    <Container asElement="nav" ScreenType="container" border>
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
      <Grid asElement="div" gridLines columns={6} gap={10}>
        <GridItem className="aspect-square">1</GridItem>
        <GridItem className="aspect-square">2</GridItem>
        <GridItem className="aspect-square">3</GridItem>
        <GridItem className="aspect-square">4</GridItem>
        <GridItem className="aspect-square">5</GridItem>
        <GridItem className="aspect-square">6</GridItem>
      </Grid>
    </Container>

    <Block asElement="aside">
      <Typography
        asElement="h1"
        border
        role="heading"
        backgroundColor="secondary"
      >
        hello h1
      </Typography>
      <Typography asElement="h2">hello h2</Typography>
      <Typography asElement="h3">hello h3</Typography>
      <Typography asElement="h4">hello h4</Typography>
      <Typography asElement="h5">hello h5</Typography>
      <Typography asElement="h6">hello h6</Typography>
      <Typography asElement="p">hello p</Typography>
      <Typography asElement="span">hello span</Typography>
      <Typography asElement="strong">hello strong</Typography>
    </Block>
  </Container>
);
export default App;
