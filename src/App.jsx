import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { ImcompleteTodos } from './components/ImcompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';


export const App =() => {
  const [todoText, setTodoText] = useState('');
  const [imcompleteTodos, setImcompleteTodos] = useState(['あああ', 'いいい'])
  const [completeTodos, setCompleteTodos] = useState(['ううう'])
  
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  
  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  }
  
  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    
    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }
  
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setImcompleteTodos(newImcompleteTodos);

  }
  return (
      <>
        <InputTodo 
          todoText={todoText} 
          onChange={onChangeTodoText} 
          onClick={onClickAdd} 
          disabled={imcompleteTodos.length >= 5}
        />
        {imcompleteTodos.length >= 5 && (<p style={{ color:'red' }}>登録できるTODOは5個までです</p>)}
        <ImcompleteTodos 
          todos={imcompleteTodos}
          onClickComplete={onClickComplete} 
          onClickDelete={onClickDelete}
        />
        <CompleteTodos 
          todos={completeTodos} 
          onClickBack={onClickBack}
        />
      </>
    );
}