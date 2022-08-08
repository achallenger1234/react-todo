import React, { useState } from "react";
import "./styles.css";

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
    
    const newcompleteTodos = [...completeTodos, imcompleteTodos(index)];
    
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newcompleteTodos);
  }
  return (
      <>
        <div className="input-area">
          <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
          <button onClick={onClickAdd}>追加</button>
        </div>
        <div className="imcomplete-area">
          <p className="title">未完了のTODO</p>
          <ul>
            {imcompleteTodos.map((todo ,index) => {
              return(
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="complete-area">
          <p className="title">完了のTODO</p>
            <ul>
                {completeTodos.map((todo) => {
                    return (
                    <div key={todo} className="list-row">
                      <li>{todo}</li>
                      <button>戻す</button>
                    </div>
                    );
                  })
                }
             
            </ul>        
        </div>
      </>
    );
}