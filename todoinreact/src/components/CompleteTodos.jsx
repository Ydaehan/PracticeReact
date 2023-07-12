import React from "react";

export const CompleteTodos = (props) => {
  const {todos, onClickBack} = props;
  return (
    <div className="complete-area">
      <p className="title">완료TODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>되돌리기</button>
              </div>
            )
          })}
        </ul>
    </div>
  )
}