import { Slash } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@Components/hooks";
import {
  Container,
  Button,
  Flex,
  Model,
  Accordion,
  ConfirmationDialog,
  Avatar,
  Badge,
  Breadcrumb,
  Checkbox,
  Typography,
  ContextMenu,
  Tooltip,
} from "@Components/ui";

const App = () => (
  <Container
    asElement="main"
    ScreenType="container"
    fullHeight
    border
    className="p-20 flex items-center flex-col"
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
            <Button variant="outline">Show Model</Button>
          </Model.Trigger>
          <Model.Content BackgroundColor="default">
            <Model.Header>
              <Model.Title>Title</Model.Title>
              <Model.Description>Description</Model.Description>
            </Model.Header>

            <Model.Footer className="gap-2">
              <Model.Close asChild>
                <Button variant="destructive">Continue</Button>
              </Model.Close>
            </Model.Footer>
          </Model.Content>
        </Model>
      </Flex>
    </Flex>

    <Flex asElement="section" className="w-96">
      <Accordion type="single">
        <Accordion.Item value="item1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>
            This is the content for section 1.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2">
          <Accordion.Trigger>Section 2</Accordion.Trigger>
          <Accordion.Content>
            This is the content for section 2.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3">
          <Accordion.Trigger>Section 3</Accordion.Trigger>
          <Accordion.Content>
            This is the content for section 3.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Flex>
    <AreYouSure />
    <Flex asElement="section" className="space-x-4">
      <Avatar>
        <Avatar.Image
          className="transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          src="https://i.pravatar.cc/150?img=68"
        />
        <Avatar.Fallback className="bg-red">JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://i.pravatar.cc/150?img=68" />
        <Avatar.Fallback>D</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://i.pravatar.cc/150?img=68" />
        <Avatar.Fallback>E</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://i.pravatar.cc/150?img=68" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
    </Flex>
    <Flex asElement="section" className="my-5 space-x-5">
      <Badge variant="default">Javascript</Badge>
      <Badge variant="destructive">Typescript</Badge>
      <Badge variant="outline">Java</Badge>
      <Badge variant="secondary">Python</Badge>
    </Flex>

    <Flex asElement="section" className="mt-5">
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link>hello</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <Slash />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link>hello</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <Slash />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link>hello</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <Slash />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link>hello</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>
            <Slash />
          </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link>hello</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
    </Flex>
    <Flex asElement="section">
      <Checkbox />
    </Flex>
    <ContextMenu>
      <ContextMenu.Trigger asChild>
        <Flex
          asElement="div"
          justifyContent="center"
          alignItems="center"
          className="w-96 aspect-video my-10"
          border
        >
          <Typography className="w-fit">Right click here</Typography>
        </Flex>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>hello</ContextMenu.Item>
        <ContextMenu.Item>hello</ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>hello right arrow</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>hello</ContextMenu.Item>
            <ContextMenu.Item>hello</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Item>hello</ContextMenu.Item>
        <ContextMenu.Item>hello</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>

    <Flex asElement="section" className="w-full">
      <Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button variant="outline">Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Tooltip content</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    </Flex>
  </Container>
);

const AreYouSure = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleConfirm = () => {
    alert("Confirmed");
  };

  const handleCancel = () => {
    alert("Cancelled");
  };

  return (
    <Flex asElement="section">
      <Button
        variant="outline"
        className="m-10"
        onClick={() => {
          setOpen(true);
        }}
      >
        Are you sure?
      </Button>
      <ConfirmationDialog
        title="Are you sure?"
        body="Are you sure you want to delete this item?"
        model
        open={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </Flex>
  );
};

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
