import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { Layout } from ".";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: <section />,
};

export default { args, argTypes: { children: { description: "Main content" } }, component: Layout } as Meta;

export const Default: Story = {};
