import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { StatusMessageSectionProperties } from "./types/model";

const StatusMessageSectionContainer = tw.section`box-border flex items-center w-full`;

const StatusMessageWrapper = tw.div`flex items-center justify-center w-full flex-col h-[17.5rem] md:(flex-row h-52)`;

const StatusCode = tw.div`flex items-center w-80 h-20 md:(h-full border-r-2 border-text)`;

const StatusMessage = tw.div`flex flex-col items-center justify-center text-center w-80 pl-4 space-y-8 h-40 md:(h-full border-l-2 border-text)`;

const StatusMessageSection: FC<StatusMessageSectionProperties> = ({ status, message, children }) => (
  <StatusMessageSectionContainer aria-label={`${status}`}>
    <StatusMessageWrapper>
      <StatusCode
        css={css`
          @media (max-width: 768px) {
            justify-content: center;
          }
        `}
      >
        <h1 css={tw`text-text text-[5rem] md:text-[10rem]`}>{status}</h1>
      </StatusCode>
      <StatusMessage>
        <p css={tw`text-text text-2xl md:text-[2rem]`}>{message}</p>
        <div css={tw`flex flex-col items-center justify-center h-2/4 text-center space-y-2`}>{children}</div>
      </StatusMessage>
    </StatusMessageWrapper>
  </StatusMessageSectionContainer>
);

export { StatusMessageSection };
