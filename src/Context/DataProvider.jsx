import React, { useReducer } from "react";
import DataCtx from "./DataContext";

const dataInitialState = {
  dados: {
    casos: null,
    pacientes: null,
  },
};

const dataReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "SET_CASOS":
      newState = { ...state, dados: { casos: action.value } };

      break;
    case "SET_PACIENTES":
      newState = { ...state, dados: { pacientes: action.value } };
      return dataInitialState;

    default:
      throw new Error();
  }
  return newState;
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataInitialState);
  return <DataCtx.Provider value={{ state, dispatch }}>{children}</DataCtx.Provider>;
};

export default DataProvider;
