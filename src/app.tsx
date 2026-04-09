import {
  MyText,
  MyBox,
  MyNewLine,
  MySpacer,
  MyStatic,
  MyTransform,
  MyUseInput,
  MyUsePaste,
  MyUseStdin,
  MyUseStdout,
  MyUseStderr,
  MyUseStdoutWrite,
  MyUseStderrWrite,
  MyUseWindowSize,
  MyUseCursor,
  MyUseAnimation,
} from './libs/index.js';

const App = () => {
  return (
    <>
      <MyText />
      <MyBox />
      <MyNewLine />
      <MySpacer />
      <MyStatic />
      <MyTransform />
      <MyUseInput />
      <MyUsePaste />
      <MyUseStdin />
      <MyUseStdout />
      <MyUseStderr />
      <MyUseStdoutWrite />
      <MyUseStderrWrite />
      <MyUseWindowSize />
      <MyUseCursor />
      <MyUseAnimation />
    </>
  );
};

export default App;

