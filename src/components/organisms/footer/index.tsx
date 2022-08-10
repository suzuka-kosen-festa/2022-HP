import tw, { css } from "twin.macro";
import { Text } from "../../atoms/text";
const Footer: React.FC = () => (
  <footer>
    <Text css={tw`text-white bg-black text-center p-4`}>&copy; 第57回鈴鹿高専祭実行委員会</Text>
  </footer>
);

export { Footer };
