import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Layout } from ".";

type T = typeof Layout
type Story = ComponentStoryObj<T>

const data = {
  node: <main />
}

export default { args: { children: data.node }, component: Layout, title: "Layout" } as ComponentMeta<T>;

export const Default: Story = {};
