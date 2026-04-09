import { Text, useStdin } from 'ink';

const MyUseStdin = () => {
  // useStdin は、stdin ストリームと stdin 関連のユーティリティを返すフック。
  // isRawModeSupported で raw mode が使えるかを確認できる。
  // setRawMode で raw mode の有効/無効を切り替えられる。
  const { isRawModeSupported } = useStdin();

  return <Text color="blue">Raw mode supported: {isRawModeSupported ? 'Yes' : 'No'}</Text>;
};

export default MyUseStdin;

