import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Footer } from ".";

type Story = ComponentStoryObj<typeof Footer>;

export default { args: { title: "Footer" }, component: Footer } as ComponentMeta<typeof Footer>;

export const Default: Story = {};
