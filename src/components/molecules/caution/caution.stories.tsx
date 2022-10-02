import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Caution } from ".";

type T = typeof Caution
type Story = ComponentStoryObj<T>

const data = {
  title: "バザーに関するお願い",
  sentence: [
      "学内における飲食物の食べ歩きはご遠慮ください。",
      "学内バザーにて購入した飲食物のお持ち帰りはご遠慮ください",
      "各出店バザーにお並びいただく際、1つの出店につきお並びいただく人数は5人までとしておりますので、当日は係員の指示に従ってください。"
  ]
}

export default {
  args: {
    title: data.title,
    sentence: data.sentence
  },
  argTypes: {
    title: {
      description: "Title of caution",
      control: {
        type: "text"
      }
    },
    sentence: {
      description: "Detailed precautions",
      control: {
        type: "array"
      }
    }
  },
  component: Caution
} as ComponentMeta<T>

export const Default: Story = {}
