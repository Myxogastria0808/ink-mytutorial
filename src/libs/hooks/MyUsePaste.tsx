import { useState } from 'react';
import { Text, usePaste } from 'ink';

const MyUsePaste = () => {
  // usePaste は、ターミナルにペーストされたテキストを受け取るためのフック。
  // Bracketed Paste Mode（ブラケットペーストモード）が自動で有効になり、
  // ペースト内容が1つの文字列として渡される。
  // useInput と併用可能で、ペースト内容は useInput には渡されない。
  //
  // --- Bracketed Paste Mode とは ---
  // ターミナルの機能で、正式名称は "Bracketed Paste Mode"（日本語でもそのまま使われる）。
  // 有効にすると、ペーストされたテキストの前後にエスケープシーケンス
  //   開始: \x1b[200~  終了: \x1b[201~
  // が付加される。これにより、プログラムは「ユーザーが1文字ずつ入力した」のか
  // 「まとめてペーストした」のかを区別できる。
  // この仕組みがないと、ペーストされた文字列が1文字ずつの入力として扱われてしまい、
  // 例えば改行を含むテキストをペーストすると意図しないコマンド実行が起きる可能性がある。
  const [pasted, setPasted] = useState('');

  usePaste((text) => {
    setPasted(text);
  });

  return <Text color="magenta">Pasted: {pasted || '(nothing pasted)'}</Text>;
};

export default MyUsePaste;

