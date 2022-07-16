import tw, { css } from "twin.macro";
import { Text } from "../../atoms/text";
const Footer: React.FC = () => {
  return (
    <footer>
      <Text css={tw`text-gray-500`}>&copy; 第57回鈴鹿高専祭実行委員会</Text>
    </footer>
  );
};

export { Footer };
