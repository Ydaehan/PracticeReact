# react
- html에 root div 태그만 두고 나머지 요소들은 JS 파일에서 화면을 조정함
```<div id="root"></div>``` 

# jsx

## index.js
- `import React from 'react';` -> 리액트 컴포넌트를 사용할때 반드시 필요한것
- 리액트에서는 함수를 사용하여 화면 요소인 컴포넌트를 표현함

## render 함수
- render 함수의 
- 첫번째 매개변수로는 컴포넌트 명이 들어가며 (HTML의 태그와 비슷한 형태)
- 두번째 매개변수로는 어디에 반영할것인지를 표기
 
### return할 태그가 여러 개 일 경우 ()로 묶음
- 하지만 묶고 나서 하나의 태그를 반환시켜야 함으로 div 태그로 감싸서 반환
- ex) h1 과 p 태그를 반환하고 싶은데 고작 태그 두개를 반환한다고 div 태그로 감싸는것은 불필요한 행동이므로 이때는
### div 대신 React.Fragment 사용하여 해결
- React.Fragment 대신 빈 괄호<>를 사용하여 감싸도 됨

## 컴포넌트화의 흐름
ex)
```
import React from 'react';

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};
export default App;
```
- 일반 js 파일로도 괜찮지만 jsx 확장자로 표시함으로써 react의 컴포넌트임을 알려줌