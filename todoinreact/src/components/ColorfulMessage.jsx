import React from 'react';

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // 넘겨주는 변수 명과 프로퍼티 명이 같다면 생략이 가능하다
    fontSize: '18px',
  };
  return <p style={contentStyle}>{children}</p>;
};

// 다른 곳에서도 사용 할 수있게 해줌
// export default ColorfulMessage;