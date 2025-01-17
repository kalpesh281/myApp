// import ThemeProvider from "./context/themeContext"; // Adjust the path as needed
// import ChildA from "./components/ChildA"; // Import your child component
// import "./style/global.css";       // Common styles
// import "./style/light.css";  // Light theme styles
// import './style/dark.css'

import TodoList from "./components/TodoList";

// import { useReducer } from "react";
// import Counter from "./components/Counter";

// const initialState = { count: 0 };

// function countReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };

//     case "DECREMENT":
//       return { count: state.count - 1 };

//     case "RESET":
//       return { count: 0 };

//     default:
//       break;
//   }
// }

function App() {
  // const [state,dispatch]=useReducer(countReducer,initialState)
  return (
    // // Wrap the app in the ThemeProvider
    // <ThemeProvider>
    //   <div style={{ padding: "20px", border: "1px solid #ccc" }}>
    //     <h1>React App with CSS Themes</h1>
    //     <ChildA />
    //   </div>
    // </ThemeProvider>

    <>
      {/* <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>React Counter with useReducer</h1>
        <Counter count={state.count} dispatch={dispatch} />
      </div> */}
      <TodoList/>
    </>
  );
}

export default App;
