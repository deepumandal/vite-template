import { useRef } from "react";
import {
  Block,
  Container,
  Flex,
  Grid,
  GridItem,
  Model,
  Typography,
} from "@Components/ui";

const App = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <Container
      // ref={ref}
      asElement="main"
      ScreenType="container"
      fullHeight
      className="px-20"
    >
      <Container asElement="nav" ScreenType="container" border>
        1
      </Container>
      <Container asElement="nav" ScreenType="full-screen" role="navigation">
        <Flex
          ref={ref}
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
          <GridItem className="aspect-square">6</GridItem>
          <GridItem className="aspect-square">6</GridItem>
          <GridItem className="aspect-square">6</GridItem>
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

      <Flex
        asElement="div"
        justifyContent="center"
        alignItems="center"
        className="h-96 mb-96"
        border
      >
        <Model>
          <Model.Trigger asChild>
            <button className="outline-none">Open Model</button>
          </Model.Trigger>
          <Model.Portal>
            <Model.Content>
              <Model.Heading>Edit profile</Model.Heading>
              <Model.Description>
                Make changes to your profile here. Click save when done.
              </Model.Description>

              <div
                style={{
                  display: "flex",
                  marginTop: 25,
                  justifyContent: "flex-end",
                }}
              >
                <Model.Close asChild>
                  <button className=" text-blue-300 outline-none">
                    Save changes
                  </button>
                </Model.Close>
              </div>
            </Model.Content>
          </Model.Portal>
        </Model>
      </Flex>
    </Container>
  );
};

export default App;
