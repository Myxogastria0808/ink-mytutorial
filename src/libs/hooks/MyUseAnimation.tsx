import { useState } from 'react';
import { Text, useAnimation } from 'ink';

const DURATION = 5000;

const MyUseAnimation = () => {
  // useAnimation は、アニメーションを駆動するためのフック。
  // frame（フレームカウンタ）、time（経過時間）、delta（前フレームからの差分）を返す。
  // 複数のアニメーションコンポーネントは内部で1つのタイマーを共有するため効率的。
  // isActive を false にするとアニメーションが停止する。
  const [active, setActive] = useState(true);
  const { frame, time } = useAnimation({ interval: 80, isActive: active });
  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  if (active && time >= DURATION) {
    setActive(false);
  }

  const done = !active;

  return (
    <Text color={done ? 'green' : 'greenBright'}>
      {done ? '✔' : spinner[frame % spinner.length]!} {done ? 'Done!' : 'Loading...'}
    </Text>
  );
};

export default MyUseAnimation;

