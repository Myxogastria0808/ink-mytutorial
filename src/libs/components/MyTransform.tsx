import { Text, Transform } from 'ink';

const MyTransform = () => {
  // <Transform><Transform/> は、子要素の出力文字列を変換するコンポーネント。
  // transform プロパティに変換関数を渡すことで、レンダリング前に文字列を加工できる。
  // 大文字・小文字変換、装飾文字の付加、文字の置換など、表示テキストの変換処理に使う。
  return (
    <>
      {/* 全て大文字に変換する */}
      <Transform transform={(output) => output.toUpperCase()}>
        <Text>Hello, World</Text>
      </Transform>
      {/* 各文字の間にスペースを挿入する */}
      <Transform transform={(output) => output.split('').join(' ')}>
        <Text>Hello</Text>
      </Transform>
      {/* 文字列を反転する */}
      <Transform transform={(output) => output.split('').reverse().join('')}>
        <Text>Hello, World</Text>
      </Transform>
    </>
  );
};

export default MyTransform;

