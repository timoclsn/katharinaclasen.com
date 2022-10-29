import { Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Button",
} as Meta;

export const Base = (args: any) => <Button {...args}>Button</Button>;
