import React, { useEffect,useState } from 'react'; // 분할 대입으로 react에서 useState를 꺼냄
// import ColorfulMessage from './components/ColorfulMessage';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  console.log("最初")
  const [num, setNum] = useState(0); // 배열의 분할 대입으로 useState에서 사용할 변수를 설정함 
  // [`state로서 사용할 변수명`, `앞의 state를 변경하기 위한 함수`]
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }
  
  useEffect(() => {
    if (num > 0) {
      if(num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>      
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>      
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>} {/* 왼쪽이 true -> 오른쪽을 반환 */}
    </>
  );
};

export default App;
