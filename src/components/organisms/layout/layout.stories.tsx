import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Layout } from ".";

type T = typeof Layout;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: (
    <div>
      <h1>Test</h1>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
      <p>this is test</p>
    </div>
  ),
};

export default {
  args,
  argTypes: {
    children: {
      description: "ReactNode which is inside layout",
      control: {
        type: "object",
      },
    },
  },
  component: Layout,
} as Meta;

export const Default: Story = {};
