import { Box, Text, Spacer } from 'ink';

const MySpacer = () => {
  // <Spacer /> は、スペースを入れるためのコンポーネント。
  return (
    <>
      {/* <Spacer/ > なし */}
      <Box flexDirection="row" width={20} borderStyle="round" borderColor="greenBright">
        <Text>Left</Text>
        <Text>Right</Text>
      </Box>
      <Box flexDirection="column" height={10} borderStyle="round" borderColor="greenBright">
        <Text>Top</Text>
        <Text>Bottom</Text>
      </Box>
      {/* <Spacer/ > あり */}
      <Box flexDirection="row" width={20} borderStyle="round" borderColor="greenBright">
        <Text>Left</Text>
        <Spacer />
        <Text>Right</Text>
      </Box>
      <Box flexDirection="column" height={10} borderStyle="round" borderColor="greenBright">
        <Text>Top</Text>
        <Spacer />
        <Text>Bottom</Text>
      </Box>
    </>
  );
};

export default MySpacer;

