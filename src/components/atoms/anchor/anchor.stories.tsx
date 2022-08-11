import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AnchorText } from ".";

type T = typeof AnchorText;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default { args: { children: data.sentence, href: "#", role: "link" }, component: AnchorText } as ComponentMeta<T>;

export const Default: Story = {};
