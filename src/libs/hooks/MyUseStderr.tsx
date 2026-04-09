import { Text, useStderr } from 'ink';

const MyUseStderr = () => {
  // useStderr は、stderr ストリームを返すフック。
  // write 関数で stderr に直接テキストを出力できる。
  // エラーログや警告の出力に使える。stdout と分離して出力したい場合に便利。
  const { stderr } = useStderr();

  return <Text color="red">stderr columns: {stderr.columns}</Text>;
};

export default MyUseStderr;

