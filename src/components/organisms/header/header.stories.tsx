import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import tw from "twin.macro";
import { Header } from ".";

type T = typeof Header;
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
  argTypes: {},
  component: Header,
} as Meta;

export const Default: Story = {};
