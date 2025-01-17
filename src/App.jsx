import ThemeProvider from "./context/themeContext"; // Adjust the path as needed
import ChildA from "./components/ChildA"; // Import your child component
import "./style/global.css";       // Common styles
import "./style/light.css";  // Light theme styles
import './style/dark.css'


function App() {
  return (
    // Wrap the app in the ThemeProvider
    <ThemeProvider>
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h1>React App with CSS Themes</h1>
        <ChildA />
      </div>
    </ThemeProvider>
  );
}

export default App;
