import { Meta } from "@storybook/react";
import { Body } from "./Body";

export default {
  component: Body,
  title: "Body",
} as Meta;

export const Base = (args: any) => <Body {...args}>Body</Body>;
