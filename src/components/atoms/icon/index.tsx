import { InlineIcon } from "@iconify/react"
import { memo } from "react";
import type { FC } from "react"
import tw from "twin.macro"
import type { IconProperties } from "./type/model";

const IconBox = tw.div`flex items-center justify-center flex-shrink-0 w-6 h-6 sm:(w-12 h-12) min-h-full`

const Icon : FC<IconProperties> = ({ icon, css, iconStyles, ...rest}) => (
  <IconBox css={css}>
    <InlineIcon icon={icon} css={[tw`w-full h-full`, iconStyles]} {...rest} />
  </IconBox>
)

export default memo(Icon)
