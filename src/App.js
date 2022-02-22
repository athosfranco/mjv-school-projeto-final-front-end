import { useState, useContext, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/ThemeConfig";
import { GlobalStyles } from "./Styles/GlobalStyles";
import LoginProvider from "./Context/LoginProvider";
import Rotas from "./Rotas";
import ModalProvider from "./Context/ModalProvider";
import ModalCtx from "./Context/ModalContext";
import Modal from "./Components/Modal/Modal";
import ReactDOM from "react-dom";

export const ThemeCtx = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const { modalState, modalDispatch } = useContext(ModalCtx);

  console.log(modalState);

  const handleToggleTheme = () => (theme === "light" ? setTheme("dark") : setTheme("light"));

  return (
    <>
      <ModalProvider>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <ThemeCtx.Provider value={{ handleToggleTheme, theme }}>
            <LoginProvider>
              {/* {modalState.display &&
                ReactDOM.createPortal(
                  <Modal
                    title={modalState.title}
                    text={modalState.text}
                    modalWithBtn={modalState.modalWithBtn}
                    confirmBtnTxt={modalState.confirmBtnTxt}
                    cancelBtnTxt={modalState.cancelBtnTxt}
                  />,
                  document.getElementById("overlay-root")
                )} */}
              <Rotas />
            </LoginProvider>
          </ThemeCtx.Provider>
        </ThemeProvider>
      </ModalProvider>
    </>
  );
}

export default App;
