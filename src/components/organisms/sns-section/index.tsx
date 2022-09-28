import type { FC } from "react";
import { Suspense, lazy } from "react";
import tw from "twin.macro";
import type { SnsSectionProperties } from "../../../models";
import { Heading } from "../../atoms/heading";

const Twitter = lazy(() => import("../../molecules/twitter"));

const SnsSectionContainer = tw.section`flex flex-col space-y-[calc(200vw / 63)]`;

const SnsSection: FC<SnsSectionProperties> = ({ title, ...rest }) => (
  <SnsSectionContainer aria-label="SNS" {...rest}>
    <Heading colorKey="yellow">{title}</Heading>
    <Suspense fallback={<div>Loading...</div>}>
      <Twitter />
    </Suspense>
  </SnsSectionContainer>
);

export { SnsSection };
