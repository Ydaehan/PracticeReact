import React from 'react';

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div className="incomplete-area">
      <p className="title">미완료TODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>완료</button>
              <button onClick={() => onClickDelete(index)}>삭제</button>
            </div>
          );
        })}
      </ul>
    </div>
  )
};