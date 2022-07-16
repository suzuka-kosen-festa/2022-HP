import tw, { css } from "twin.macro";

const Footer: React.FC = () => {
  return (
    <footer>
      <p css={tw`text-white bg-black text-center p-4`}>&copy; 第57回鈴鹿高専祭実行委員会</p>
    </footer>
  );
};

export { Footer };
