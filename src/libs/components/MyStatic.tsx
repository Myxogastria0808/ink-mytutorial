import { useState, useEffect } from 'react';
import { Static, Box, Text } from 'ink';

const MyStatic = () => {
  // <Static><Static/> は、一度レンダリングされた要素を再レンダリングしないようにする。
  // 通常の Ink コンポーネントは state が変わるたびに画面全体が再描画されるが、
  // <Static> に渡された要素は一度表示されたら固定され、以降の再レンダリングの対象外になる。
  // npm install の進捗ログやテストランナーの結果表示のように、
  // 「確定済みの出力」と「まだ動いている部分」を分離するのに使う。
  // <Static> の外にある要素は通常通り再レンダリングされる。
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogs((prev) => {
        if (prev.length >= 5) {
          clearInterval(timer);
          return prev;
        }

        return [...prev, `Log entry #${prev.length + 1}`];
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* items に配列を渡し、各要素を一度だけレンダリングする */}
      <Static items={logs}>
        {(log, index) => (
          <Box key={index}>
            <Text color="green">{log}</Text>
          </Box>
        )}
      </Static>
      <Box>
        <Text color="yellow">Total: {logs.length} logs</Text>
      </Box>
    </>
  );
};

export default MyStatic;

