import { useTheme } from "@Components/hooks";
import {
  Container,
  Button,
  Flex,
  Grid,
  GridItem,
  Typography,
} from "@Components/ui";

const App = () => (
  <Container
    asElement="main"
    ScreenType="container"
    fullHeight
    border
    className="px-20"
  >
    <Grid
      columns="2"
      className="px-5 py-3 mt-5 space-x-5 mx-auto w-fit rounded"
      BackgroundColor="secondary"
    >
      <GridItem border>
        <ThemeBtn />
      </GridItem>

      <GridItem border>
        <Typography variants="primary" asElement="h4">
          hello
        </Typography>
      </GridItem>
    </Grid>
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
