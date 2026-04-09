import { Box } from 'ink';

const MyBox = () => {
  // <Box><Box/> は、<div style="display: flex"></div> と同じだと思えばいい。
  // inkは、常にdisplay" flexの世界でUIを書いていると考えればいい。
  return (
    <>
      <Box width={10} height={10} borderStyle="round" borderColor="greenBright"></Box>
    </>
  );
};

export default MyBox;

