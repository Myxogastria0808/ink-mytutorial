import { useState } from 'react';
import { Text, useStdout, useInput } from 'ink';

const MyUseStdoutWrite = () => {
  // useStdout の write 関数は、Ink のレンダリング領域外に直接テキストを出力する。
  // Ink が管理する画面領域とは独立して出力されるため、
  // デバッグログやファイル出力のような用途に使える。
  // ここでは "w" キーを押すと stdout に直接テキストを書き出す例を示す。
  const { write } = useStdout();
  const [count, setCount] = useState(0);

  useInput((value) => {
    if (value === 'w') {
      const next = count + 1;
      setCount(next);
      write(`[stdout write] message #${next}\n`);
    }
  });

  return <Text color="green">Press "w" to write to stdout (count: {count})</Text>;
};

export default MyUseStdoutWrite;

