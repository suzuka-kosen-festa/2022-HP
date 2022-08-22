import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Twitter } from ".";

type T = typeof Twitter;
type Story = ComponentStoryObj<T>;

export default { component: Twitter } as ComponentMeta<T>;

export const Default: Story = {};
