import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Footer } from ".";
type T = typeof Footer;
type Story = ComponentStoryObj<T>;

export default { component: Footer } as ComponentMeta<T>;

export const Default: Story = {};
