import { useReducer, useState } from "react";


const reducer = (state, action) => { // Reducer function
  switch (action.type) { // Switch statement
    case "ADD": 
      return [...state, action.payload];  // add new todo
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload); // Filter out the item
    default:
      return state;
  }
};

function TodoList() {
    const [state, dispatch] = useReducer(reducer, []); // Use the reducer
    const [todo, setTodo] = useState("");

    
   const addTodo=()=>{
    if(todo.trim()){
        dispatch({type:"ADD",payload:{id:Math.random(),text:todo}}); // Dispatch an action
        setTodo("");
    }
   }
 const removeTodo = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a todo"
        />
        <button onClick={addTodo}>Add Todo</button>

        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={()=>removeTodo(todo.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default TodoList;
