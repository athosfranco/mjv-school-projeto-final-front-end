import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/ThemeConfig";
import { GlobalStyles } from "./Styles/GlobalStyles";
import LoginProvider from "./Context/LoginProvider";
import Rotas from "./Rotas";
import ModalProvider from "./Context/ModalProvider";
import CasoDeAnalise from "./Components/CasoDeAnalise/CasoDeAnalise";

export const ThemeCtx = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => (theme === "light" ? setTheme("dark") : setTheme("light"));

  useEffect(() => {
    const userConfig = JSON.parse(localStorage.getItem("USER_CONFIG"));
    if (userConfig?.darkMode) {
      handleToggleTheme();
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ThemeCtx.Provider value={{ handleToggleTheme, theme }}>
          {" "}
          <LoginProvider>
            <ModalProvider>
              <Rotas />
            </ModalProvider>
          </LoginProvider>
        </ThemeCtx.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
