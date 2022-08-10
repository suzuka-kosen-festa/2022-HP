import tw, { css } from "twin.macro";
import { Text } from "../../atoms/text";
const Footer: React.FC = () => (
  <footer css={tw`absolute bottom-0`}>
    <Text css={tw`bg-black text-center p-4`}>&copy; 第57回鈴鹿高専祭実行委員会</Text>
  </footer>
);

export { Footer };
