import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAll, deleteTodo } from './action';
import img from './images/plus.svg';
import trash from './images/trash.svg';


function App() {
  const [inputData, setInputData] = useState();
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todoList">
        <h1>React Redux Todo List</h1>
        <span>
          <input type="text" placeholder="Add items..." value={inputData} onChange={(event) => setInputData(event.target.value)}></input>
          <img src={img} className="iconImg" alt="plus icon" onClick={() => { dispatch(addTodo(inputData), setInputData('')) }} />
        </span>
      </div>
      <div className="todoItems">
        {
          list.map((element) => {
            return (
              <div className="itemList" key={element.id}>
                <h3>{element.data}</h3>
                <img src={trash} className="iconImg" alt="Trash Icon" onClick={() => { dispatch(deleteTodo(element.id)) }} />
              </div>
            )
          })
        }
      </div>
      <div className="deleteAllBtn">
        <button onClick={() => (dispatch(deleteAll()))}>Delete All</button>
      </div>
    </>
  );
}

export default App;
