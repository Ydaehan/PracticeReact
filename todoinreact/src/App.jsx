import React, { useState }from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] =useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value); 

  // 추가 버튼
  const onClickAdd = () => {
    if (todoText === "") return;
    /* 배열에 text를 설정해주는 것만으로 state가 변경되어 렌더링됨*/
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 삭제 버튼
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  // 완료 버튼
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 돌리기 버튼
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODO입력" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>추가</button>
      </div>
      <div className="incomplete-area">
        <p className="title">미완료TODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">완료TODO</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index)}>되돌리기</button>
                </div>
              )
            })}
            
          </ul>
      </div>
    </>
  )
}