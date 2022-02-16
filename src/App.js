import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/ThemeConfig";
import { GlobalStyles } from "./Styles/GlobalStyles";
import LoginProvider from "./Context/LoginProvider";
import Rotas from "./Rotas";

export const ThemeCtx = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => (theme == "light" ? setTheme("dark") : setTheme("light"));

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ThemeCtx.Provider value={{ handleToggleTheme, theme }}>
          <LoginProvider>
            <Rotas />
          </LoginProvider>
        </ThemeCtx.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
