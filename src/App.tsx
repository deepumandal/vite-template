import {
  Slash,
  CalendarDays,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "@Components/hooks";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@Components/shared/Form/Form";
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
  HoverCard,
  Skeleton,
  Separator,
  Block,
  DropdownMenu,
} from "@Components/ui";

const App = () => (
  <Container
    asElement="main"
    ScreenType="container"
    fullHeight
    border
    className="p-20 mb-40 flex items-center flex-col"
  >
    <FormComponent />
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
      <Accordion type="multiple">
        <Accordion.Item value="item1">
          <Accordion.Trigger rotate={false}>Section 1</Accordion.Trigger>
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
    <Flex asElement="section" className="w-full">
      <HoverCardDemo />
    </Flex>
    <Flex asElement="section" className="w-full space-x-2" alignItems="center">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Flex>
    <Flex asElement="section" className="mt-10">
      <Block>
        <Block className="space-y-1">
          <Typography
            asElement="h4"
            className="text-sm font-medium leading-none"
          >
            Radix Primitives
          </Typography>
          <Typography asElement="p" className="text-sm text-muted">
            An open-source UI component library.
          </Typography>
        </Block>
        <Separator className="my-4" />
        <Flex
          asElement="div"
          className="flex h-5 items-center space-x-4 text-sm"
        >
          <Typography asElement="span">Blog</Typography>
          <Separator orientation="vertical" />
          <Typography asElement="span">Docs</Typography>
          <Separator orientation="vertical" />
          <Typography asElement="span">Source</Typography>
        </Flex>
      </Block>
    </Flex>
    <Flex asElement="section" className="my-10">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant={"secondary"}>Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-56">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Item>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Flex>
  </Container>
);

const FormComponent = () => {
  const form = useForm();

  return (
    <Flex asElement="section">
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input {...field} placeholder="shadCn" />
                {/* <Input placeholder="shadCn" {...field} /> */}
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </Flex>
  );
};

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

export const HoverCardDemo = () => (
  <HoverCard>
    <HoverCard.Trigger asChild>
      <Button variant="link">@nextjs</Button>
    </HoverCard.Trigger>
    <HoverCard.Content className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <Avatar.Image src="https://github.com/vercel.png" />
          <Avatar.Fallback>VC</Avatar.Fallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard>
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
