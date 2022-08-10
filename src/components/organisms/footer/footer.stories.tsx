import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Footer } from ".";

type F = typeof Footer;
type Story = ComponentStoryObj<F>;

export default { args: { title: "Footer" }, component: Footer } as ComponentMeta<F>;

export const Default: Story = {};
