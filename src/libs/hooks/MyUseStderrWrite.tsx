import { useState } from 'react';
import { Text, useStderr, useInput } from 'ink';

const MyUseStderrWrite = () => {
  // useStderr の write 関数は、stderr に直接テキストを出力する。
  // stdout とは別のストリームに出力されるため、
  // エラーログや警告を通常の出力と分離したい場合に使う。
  // ここでは "e" キーを押すと stderr に直接テキストを書き出す例を示す。
  const { write } = useStderr();
  const [count, setCount] = useState(0);

  useInput((value) => {
    if (value === 'e') {
      const next = count + 1;
      setCount(next);
      write(`[stderr write] error #${next}\n`);
    }
  });

  return <Text color="red">Press "e" to write to stderr (count: {count})</Text>;
};

export default MyUseStderrWrite;

