import { Children, createContext, useState } from "react";


export const ThemeContext= createContext({
  theme: "light",
  toggleTheme: ()=>{}
})

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
       
        {children}
      </ThemeContext.Provider>
    </>
  );
};