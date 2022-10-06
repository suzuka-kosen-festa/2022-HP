---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from 'react';
import { <%= upper_component_name %> } from ".";

type T = typeof <%= upper_component_name %>;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {};

export default {
  args,
  argTypes: {},
  component: <%= upper_component_name %>,
} as Meta;

export const Default: Story = {};
