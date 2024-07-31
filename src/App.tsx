import { useTheme } from "@Components/hooks";
import {
  Container,
  Button,
  Flex,
  Grid,
  GridItem,
  Model,
  Typography,
} from "@Components/ui";
import { Accordion } from "@Components/ui/Accordion";

const App = () => (
  <Container
    asElement="main"
    ScreenType="container"
    fullHeight
    border
    className="px-20"
  >
    <Flex asElement="section" BackgroundColor="default">
      <Typography asElement="h1">hello</Typography>
    </Flex>
    <Grid BackgroundColor="background" asElement="div" columns="5" border>
      <GridItem>
        <Button variant={"ghost"}>hello</Button>
      </GridItem>
      <GridItem>
        <ThemeBtn />
      </GridItem>
      <GridItem>
        <Accordion type="single" collapsible>
          <Accordion.AccordionItem value="item-1">
            <Accordion.AccordionTrigger>
              Is it accessible?
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        </Accordion>
      </GridItem>
    </Grid>
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
    {/* <Container asElement="nav" ScreenType="container" border>
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
      </Block> */}

    {/* <Flex
      asElement="div"
      justifyContent="center"
      alignItems="center"
      className="h-96 mb-96"
      border
    >
      
    </Flex> */}
    <button>open</button>
  </Container>
);

const ThemeBtn = () => {
  const { setTheme } = useTheme();

  return (
    <Flex asElement="div" className="space-x-3">
      <Button
        onClick={() => {
          setTheme("dark");
        }}
      >
        dark
      </Button>
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        light
      </Button>
      <Button
        onClick={() => {
          setTheme("system");
        }}
      >
        system
      </Button>
    </Flex>
  );
};

export default App;
