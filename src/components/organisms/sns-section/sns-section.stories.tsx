import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import tw from "twin.macro";
import { SnsSection } from ".";

type T = typeof SnsSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "SNS",
  children: "今年の鈴鹿高専祭では、史上初となるラジオの配信を行っています。\nご視聴はYouTube、Spotifyから！",
  socialData: [
    {
      icon: "ci:twitter",
      key: "Twitter",
      link: "https://twitter.com/KOSENFESTA",
      style: tw`text-social-twitter hover:text-social-twitter-reaction`,
    },
    {
      icon: "ci:instagram",
      key: "Instagram",
      link: "https://www.instagram.com/kosenfesta/",
      style: tw`text-white bg-social-instagram hover:bg-social-instagram-reaction rounded-md sm:rounded-2xl`,
    },
    {
      icon: "ci:youtube",
      key: "YouTube",
      link: "https://www.youtube.com/channel/UCV4zdsdagV2N3juHRz2dqQQ",
      style: tw`text-social-youtube hover:text-social-youtube-reaction`,
    },
    {
      icon: "ci:spotify",
      key: "Spotify",
      link: "https://open.spotify.com/show/4n0D0dsaFaPbJTz7tGpfTR?si=8yZ1H8LzTM-ZJPyYN6CU-A",
      style: tw`text-social-spotify hover:text-social-spotify-reaction`,
    },
  ]
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
    socialData: {
      description: "Data of social media",
      control: {
        type: "array"
      }
    }
  },
  component: SnsSection,
} as Meta;

export const Default: Story = {};
