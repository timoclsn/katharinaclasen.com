import { Meta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Heading",
} as Meta;

export const Base = (args: any) => <Heading {...args}>Heading</Heading>;
