import { useState } from 'react';
import { Text, useInput } from 'ink';

const MyUseInput = () => {
  // useInput は、ユーザーのキー入力をリアルタイムに受け取るためのフック。
  // コールバックには入力文字列と、特殊キー情報を持つ key オブジェクトが渡される。
  // raw mode を内部で使用しているため、1文字ずつ即座に検知できる。
  //
  // --- raw mode と cooked mode ---
  // cooked mode（通常モード）: 入力は行単位でバッファされ、Enter を押すまでプログラムに渡されない。
  //   Ctrl+C などの特殊キーはターミナル側が処理する。
  // raw mode: キー入力が1文字ずつ即座にプログラムに渡される。
  //   Ctrl+C などもターミナルが処理せず、プログラム側で受け取れる。
  //   useInput は内部で raw mode を有効にしているため、リアルタイムなキー検知が可能。
  const [input, setInput] = useState('');

  useInput((value, key) => {
    if (key.return) {
      setInput('(Enter pressed)');
    } else if (key.leftArrow) {
      setInput('← Left');
    } else if (key.rightArrow) {
      setInput('→ Right');
    } else {
      setInput(value);
    }
  });

  return <Text color="cyan">Last input: {input || '(none)'}</Text>;
};

export default MyUseInput;

