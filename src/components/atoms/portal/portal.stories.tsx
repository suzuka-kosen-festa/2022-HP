import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Portal } from ".";

type T = typeof Portal;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: (
    <div>
      <h3>Modal</h3>
      <p>This is Content</p>
      <button type="button">Close</button>
    </div>
  ),
  portalId: "#portal",
};

export default {
  args,
  argTypes: {
    children: {
      description: "ReactNode inside portal",
      control: {
        type: "object",
      },
    },
    portalId: {
      description: "id for selector about portal",
      control: {
        type: "text",
      },
    },
  },
  component: Portal,
} as Meta;

export const Default: Story = {};
