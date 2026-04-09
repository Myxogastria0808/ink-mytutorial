import { Box, Text, Newline } from 'ink';

const MyNewLine = () => {
  // <Newline /> は、改行を入れるためのコンポーネント。
  return (
    <Box>
      <Text>Hello,</Text>
      <Newline />
      <Text>World</Text>
    </Box>
  );
};

export default MyNewLine;

