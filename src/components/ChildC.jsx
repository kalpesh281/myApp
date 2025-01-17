import { useContext } from "react";
import { ThemeContext } from "../context/themeContext"; // Adjust the path if needed

export default function ChildC() {
    // Use the context
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the context //


  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
