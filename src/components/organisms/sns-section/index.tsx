import type { FC } from "react";
import tw from "twin.macro";
import type { SnsSectionProperties, SocialData } from "./types/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import Icon from "../../atoms/icon";

const SnsSectionContainer = tw.section`flex flex-col justify-center items-center`;

const Social = tw.div`flex space-x-8 sm:space-x-12 justify-center items-center`;

const SnsSection: FC<SnsSectionProperties> = ({ title, children, socialData, ...rest }) => (
  <SnsSectionContainer aria-label="SNS" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="blue">
      {title}
    </Heading>
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{children}</Text>
    <Social>
      {socialData.map(data => (
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
