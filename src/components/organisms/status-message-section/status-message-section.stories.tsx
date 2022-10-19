import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { StatusMessageSection } from ".";

type T = typeof StatusMessageSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  status: 404,
  message: "Not found",
  children: (
    <div>
      <p>Page not implemented or not found.</p>
      <p>Please check the URL again.</p>
      <p>top</p>
    </div>
  ),
};

export default {
  args,
  argTypes: {
    status: {
      description: "Status code",
      control: {
        type: "number",
      },
    },
    message: {
      description: "Main message of error",
      control: {
        type: "text",
      },
    },
    children: {
      description: "Description about error",
      control: {
        type: "object",
      },
    },
  },
  component: StatusMessageSection,
} as Meta;

export const Default: Story = {};
