import { UilArrowRight } from "@iconscout/react-unicons";
import { Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Button",
} as Meta;

export const SolidPrimary = (args: any) => <Button {...args}>Button</Button>;
export const SolidPrimaryIcon = (args: any) => (
  <Button {...args}>
    <UilArrowRight />
    Button
  </Button>
);
export const SolidDisabled = (args: any) => (
  <Button disabled {...args}>
    Button
  </Button>
);

export const OutlinePrimary = (args: any) => (
  <Button style="outline" {...args}>
    Button
  </Button>
);

export const TextPrimary = (args: any) => (
  <Button style="text" {...args}>
    Button
  </Button>
);
