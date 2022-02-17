import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: blue;
            text-decoration: underline;
        }
    }
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
        font-family: 'Fira Sans', sans-serif;
        
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};      
        overflow-x: hidden;  
    }
    h1 {
        color: ${(props) => props.theme.titles};        
    }
    .accent {
        background-color: ${(props) => props.theme.accent};
        color: ${(props) => props.theme.text};
        height: 30px;
    }
    button {
        background-color: ${({ type, theme }) =>
          type === "success"
            ? theme.success
            : type === "danger"
            ? theme.danger
            : type === "warning"
            ? theme.warning
            : type === "info" && theme.info};
    }
`;
