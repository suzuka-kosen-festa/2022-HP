import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { NotFound } from ".";

type T = typeof NotFound;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  status: 404,
  message: "Not Found",
};

export default {
  args,
  argTypes: {},
  component: NotFound,
} as Meta;

export const Default: Story = {};
