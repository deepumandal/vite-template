import { useTheme } from "@Components/hooks";
import { Container, Button, Flex, Model } from "@Components/ui";

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
      <Flex className="w-full p-5" justifyContent="center">
        <Model>
          <Model.Trigger asChild>
            <Button variant="outline" className="">
              Show Model
            </Button>
          </Model.Trigger>
          <Model.Content BackgroundColor="default">
            <Model.Header>
              <Model.Title>Title</Model.Title>
              <Model.Description>Description</Model.Description>
            </Model.Header>

            <Model.Footer className="gap-2">
              <Model.Close>
                <Button variant="destructive">Continue</Button>
              </Model.Close>
            </Model.Footer>
          </Model.Content>
        </Model>
      </Flex>
    </Flex>
  </Container>
);

const ThemeBtn = () => {
  const { setTheme } = useTheme();

  return (
    <Flex asElement="div" className="space-x-3 opa">
      <Button
        variant="outline"
        onClick={() => {
          setTheme("dark");
        }}
      >
        dark
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setTheme("light");
        }}
      >
        light
      </Button>
      <Button
        variant="outline"
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
