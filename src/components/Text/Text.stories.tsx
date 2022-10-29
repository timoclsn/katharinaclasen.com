import { Meta } from "@storybook/react";
import { Text } from "./Text";

export default {
  component: Text,
  title: "Text",
} as Meta;

export const Base = (args: any) => <Text {...args}>Text</Text>;
