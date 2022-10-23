import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { TicketSection } from ".";

type T = typeof TicketSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "Ticket",
  children:
    "感染拡大防止のための入場制限により、ご入場いただける方を\n本校学生とその家族・学生の友人各2名・本校の受験を考える中学生とその保護者1名・本校OB、OGの皆様・ご協賛いただいた企業の方に限定させていただいております。\n\nまた、中学生の皆様向けに 中学生受験相談室 というイベントを実施いたしますので、ぜひご参加ください。\n日時：10/30（日)  10:30~12:00、14:00~15:30\n場所：マルチメディア棟1階 図書館",
};

export default {
  args,
  argTypes: {
    title: { description: "Title of section", control: { type: "text" } },
    children: {
      description: "Value of main sentence in section",
      control: {
        type: "text",
      },
    },
  },
  component: TicketSection,
} as Meta;

export const Default: Story = {};
