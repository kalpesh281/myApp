import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(); // Create a context

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Set the initial theme

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
// Set the theme class on the body element

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(
      theme === "light" ? "light-theme" : "dark-theme"
    );
  }, [theme]);
  

  return (
    // Provide the theme and toggleTheme function to the children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export { ThemeContext };
