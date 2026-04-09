import { Text, useWindowSize } from 'ink';

const MyUseWindowSize = () => {
  // useWindowSize は、ターミナルウィンドウのサイズ（列数・行数）を返すフック。
  // ウィンドウがリサイズされると自動的に再レンダリングされる。
  // レスポンシブなレイアウトを作るのに便利。
  const { columns, rows } = useWindowSize();

  return (
    <Text color="yellow">
      Window size: {columns}x{rows}
    </Text>
  );
};

export default MyUseWindowSize;

