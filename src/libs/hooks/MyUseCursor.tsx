import { useEffect } from 'react';
import { Text, useCursor } from 'ink';

const MyUseCursor = () => {
  // useCursor は、ターミナルのカーソル位置を制御するためのフック。
  // setCursorPosition で指定した座標にカーソルを表示できる。
  // IME（入力メソッドエディタ）での変換中の文字表示などに使う。
  // undefined を渡すとカーソルを非表示にできる。
  const { setCursorPosition } = useCursor();

  useEffect(() => {
    // カーソルを (0, 0) に表示する
    setCursorPosition({ x: 0, y: 0 });

    return () => {
      // クリーンアップ時にカーソルを非表示にする
      setCursorPosition(undefined);
    };
  }, [setCursorPosition]);

  return <Text color="white">Cursor set to (0, 0)</Text>;
};

export default MyUseCursor;

