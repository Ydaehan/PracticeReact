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

## component의 명명규칙
- component 파일 명의 첫 글자는 무조건 대문자로 시작할 것
```
  // 올바른 예
  // App
  // SomeComponent

  // 에러가 발생하는 예
  // app
  // someComponent

  // 에러가 발생하지는 않지만 권장하지않는 예
  // Some_component
  // Some_Component
```

- 첫글자를 대문자로 시작하여, 단어의 단락을 대문자로 하는 변수선언법을 "파스칼케이스(PascalCase) 라고 한다.
- React의 Component는 이 PascalCase를 사용하여 명명하도록 하자

## 리액트에서 이벤트 취급 및 스타일 취급
- 예를 들어 버튼에 onClick 이벤트를 달려고할 때
  컴포넌트에 버튼을 생성하고 버튼 태그에 `onClick={}`을 달아주면 `{}` 내부는 자바스크립트로 인식하여 자바스크립트를 작성 가능
- ex)
  ```
    const App = () => {
      const onClickButton = () => alert();
      return (
        <>
          <h1 style={}>こんにちは！</h1>
          <p>お元気ですか？</p>
          <button onClick={onClickButton}>ボタン</button>
        </>
      );
    };
  ```
- style은 object로서 구현하기때문에 태그에 이벤트와 같이 `style={}`
  을 달아주고 그 내부에 javascrips의 object `{}` 를 달아줌
  기본은 아래와 같다
  ```
    <h1 style={ { } }></h1>
  ```
  
- 위 처럼 태그에 직접 적는 방법 외에도 변수로 정의해서 사용할 수 있다
  ```
    const contentStyle = {
      color: 'blue',
      fontSize: '18px',
    };
    <!-- ... 중략 -->
    <p style={contentStyle}>お元気ですか？</p>
  ```
- style을 변수로 선언해서 사용하거나 js tag에 직접 넣거나 할 때에는
  ex) `font-size` 와 같이 `-`로 잇는 방법이 아닌 `fontSize`(낙타표기법) camelCase로 사용한다

- 이 외 다른 리액트의 라이브러리를 사용하여 css를 사용하는 방법도 있다

# Props
- 리액트에서 굉장히 중요함
- 컴포넌트에 대해 넘겨주는 인수와 같은 것
- 여러 조건에서 컴포넌트의 행동들에대해 props로 조건을 넘겨주어 컴포넌트를 동적으로 사용할 수 있게 해주는 것
- props를 넘겨 받고 props를 `console.log()` 로 확인한 결과 -> object 형으로 넘겨주어 object 처럼 사용이 가능하다
- 컴포넌트에 화면에서 바꾸고 싶은 것들을 props로 넘겨주어
  props의 사용자가 지정해둔 프로퍼티들을 넘겨준 props에 따라 다르게 출력할 수 있다

- 사용 할 때 매번 `props.` 처럼 지정해 주지 않아도
  분해대입으로 props에서 변수명으로 꺼내어 사용 할 수 있다
  ```
  <!-- ... -->
    const { color, children } = props;
    const contentStyle = {
      color, // 넘겨주는 변수 명과 프로퍼티 명이 같다면 생략이 가능하다
      fontSize: '18px',
    };
    return <p style={contentStyle}>{children}</p>;
  <!-- ... -->
  ```

## State
- props와 마찬가지로 중요한 개념
- 각각의 컴포넌트가 가지고있는 상태
  이전의 배운 곳 까지의 기술로는 자신이 입력한 문자밖에
  꺼낼 수 없지만 실제 웹 개발에서는 여러 데이터를 받아서 화면에 표시함
  조건에 의해 동적으로 변하는 부분을 state로 정의함으로써
  여러 상태의 화면을 표시할 수 있다

- `useState()` 에서 배열의 분할 대입으로 useState에서 사용할 변수를 설정함
`[state로서 사용할 변수명`, `앞의 state를 변경하기 위한 함수]`
ex) 
```
  const [num, setNum] = useState(0);
```
- `useState()`의 `()` 안에는 앞에서 설정한 변수의 초기값을 설정함

- `useState()`를 사용함으로써 상태에 따른 동적인 변수를 사용할 수 있다
--> 코드를 다시읽어(새로고침)들이지도 않는데 어떻게 상태에 따라 변수가 변하는가 ===> component가 state가 갱신될 때마다 재 rendering 되기 때문이다.

### 재렌더링 되는 경우
1) state를 갱신한 경우
2) 컴포넌트의 props를 받아서 내용이 변경된 경우
3) 부모의 컴포넌트가 재 렌더링 된 경우

- component내에서 사용할 state는 보통 component의 최상위에 위치시키는 것이 가독성도 좋아진다

## useEffect()
- 감시할 변수 등을 설정하여 해당 변수의 상태(값)이 변할 때만 작동하도록 바꿀 수 있다
- 재렌더링으로 인한 버그를 막기위함
- 처리의 관심을 분리
- 리액트 개발에 필수
- 최초 1회만 해당 렌더링을 실행하도록 할 수 있다.

## export의 종류
- 함수 component 아래에 `export default 함수명` 처럼 사용 할 수도 있고
- 함수 선언부 앞에 export를 붙여 사용할 수 있지만 import 할 때
  `export default` 와 달리 `import { 함수명 } from '파일위치';` 처럼 사용해야한다.
