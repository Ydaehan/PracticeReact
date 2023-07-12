import React, { useState }from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo todoText={ todoText } onChange={ onChangeTodoText } onClick={ onClickAdd } disabled={incompleteTodos.length >= 5} />
      { incompleteTodos.length >= 5 && <p style={{ color:'red' }}>등록 할 수 있는 todo는 5개까지입니다. 먼저 삭제 해 주세요</p>}
      <IncompleteTodos todos={ incompleteTodos } onClickComplete={ onClickComplete } onClickDelete={ onClickDelete } />
      <CompleteTodos todos={ completeTodos } onClickBack={ onClickBack }/>
    </>
  )
}