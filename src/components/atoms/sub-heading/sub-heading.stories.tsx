import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { SubHeading } from ".";

type T = typeof SubHeading;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: "This is test",
};

export default {
  args,
  argTypes: {
    children: { description: "Context of sub heading", control: { type: "text" } },
  },
  component: SubHeading,
} as Meta;

export const Default: Story = {};
