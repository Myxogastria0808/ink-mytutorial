import { Text, useStdout } from 'ink';

const MyUseStdout = () => {
  // useStdout は、Ink がレンダリングしている stdout ストリームを返すフック。
  // write 関数で Ink のレンダリング領域外に直接テキストを出力できる。
  // ログファイルへの書き出しやデバッグ出力などに使える。
  const { stdout } = useStdout();

  return <Text color="green">stdout columns: {stdout.columns}</Text>;
};

export default MyUseStdout;

