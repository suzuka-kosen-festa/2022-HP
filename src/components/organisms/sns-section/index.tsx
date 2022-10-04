import type { FC } from "react";
import tw from "twin.macro";
import type { SnsSectionProperties, SocialData } from "./type/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import Icon from "../../atoms/icon";

const SnsSectionContainer = tw.section`flex flex-col justify-center items-center`;

const Social = tw.div`flex space-x-8 sm:space-x-12 justify-center items-center`;

const datas: Array<SocialData> = [
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
];

const SnsSection: FC<SnsSectionProperties> = ({ title, children, ...rest }) => (
  <SnsSectionContainer aria-label="SNS" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="blue">
      {title}
    </Heading>
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{children}</Text>
    <Social>
      {datas.map(data => (
        <Icon
          as="a"
          css={tw`w-10 h-10 sm:(w-20 h-20) cursor-pointer`}
          icon={data.icon}
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          iconStyles={data.style}
          key={data.key}
        />
      ))}
    </Social>
  </SnsSectionContainer>
);

export { SnsSection };
