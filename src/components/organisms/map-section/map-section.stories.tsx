import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { MapSection } from ".";

type T = typeof MapSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "Map",
};

export default {
  args,
  argTypes: {
    title: {
      description: "Title of section",
      control: {
        type: "text",
      },
    },
  },
  component: MapSection,
} as Meta;

export const Default: Story = {};
