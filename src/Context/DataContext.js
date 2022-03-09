import { createContext } from "react";

const DataCtx = createContext({
  dados: {
    casos: null,
    pacientes: null,
  },
});

export default DataCtx;
