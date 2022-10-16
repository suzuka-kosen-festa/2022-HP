import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import tw from "twin.macro";
import { userEvent, within } from "@storybook/testing-library";
import { HamburgerMenu } from "./index";

type T = typeof HamburgerMenu;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  headerLinks: [
    {
      link: "/",
      color: tw`text-primary-yellow`,
      name: "Top",
    },
    {
      link: "/member",
      color: tw`text-primary-red`,
      name: "Members",
    },
    {
      link: "/timetable",
      color: tw`text-primary-green`,
      name: "Schedule",
    },
    {
      link: "/bazaar",
      color: tw`text-primary-purple`,
      name: "Bazaar",
    },
    {
      link: "/sponsors",
      color: tw`text-primary-blue`,
      name: "Sponsors",
    },
  ],
};

export default {
  args,
  argTypes: {
    headerLinks: {
      description: "Data of menu list",
      control: {
        type: "array",
      },
    },
  },
  component: HamburgerMenu,
} as Meta;

export const Default: Story = {};
export const Open: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("menu button"));
  },
};
