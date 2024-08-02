import { useTheme } from "@Components/hooks";
import { Container, Button, Flex } from "@Components/ui";

const App = () => (
  <Container
    asElement="main"
    ScreenType="container"
    fullHeight
    border
    className="p-20 flex justify-center"
  >
    <Flex flexDirection="column" className="gap-10" alignItems="center">
      <ThemeBtn />
      <Flex className="gap-5 flex-wrap" justifyContent="center">
        <Button variant="default">default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="outline" className="">
          outline
        </Button>
        <Button variant="secondary">secondary</Button>
      </Flex>
    </Flex>
  </Container>
);

const ThemeBtn = () => {
  const { setTheme } = useTheme();

  return (
    <Flex asElement="div" className="space-x-3 opa">
      <Button
        variant="destructive"
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
