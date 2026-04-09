import { Box, Text } from 'ink';

const MyText = () => {
  // <Text><Text/> は、内側にtextか<Text><Text/>のみを入れることがきる。
  return (
    <>
      <Text color="green">Green</Text>
      <Text color="#ff0000">Red</Text>
      <Text color="rgb(0, 0, 255)">Blue</Text>
      <Text italic>Itaric</Text>
      <Text bold>Bold</Text>
      <Text underline>Underline</Text>
      <Text strikethrough>Strikethrough</Text>
      <Text color="redBright" inverse>
        Inverse
      </Text>
      <Text backgroundColor="rgb(0, 0, 255)" color="green">
        BackgroundColor
      </Text>
      {/* DimColor ... 明るさを落とした色になる */}
      <Text color="redBright" dimColor>
        DimColor
      </Text>
      {/* 一行に収まらないときの文字の表示パターン */}
      {/* wrap (defaultは、これになっている) ... 文字が一行に収まらないときに、次の行に折り返す */}
      <Box width={7}>
        <Text>Hello, World</Text>
      </Box>
      {/* hard ... 行いっぱいに表示し、必要に応じて分割して改行される。 */}
      <Box width={3}>
        <Text wrap="hard">Hello, World</Text>
      </Box>
      {/* truncate ... 列幅を超えると、末尾に...を表示する。 */}
      <Box width={7}>
        <Text wrap="truncate">Hello, World</Text>
      </Box>
      {/* truncate-end ... 列幅を超えると、末尾に...を表示する。*/}
      <Box width={7}>
        <Text wrap="truncate-end">Hello, World</Text>
      </Box>
      {/* truncate-middle ... 列幅を超えると、中央に...を表示する。*/}
      <Box width={7}>
        <Text wrap="truncate-middle">Hello, World</Text>
      </Box>
      {/* truncate-start ... 列幅を超えると、先頭に...を表示する。 */}
      <Box width={7}>
        <Text wrap="truncate-start">Hello, World</Text>
      </Box>
    </>
  );
};

export default MyText;

