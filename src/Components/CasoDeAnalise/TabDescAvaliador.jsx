import React, { useState } from "react";
import { CasesContainer } from "../../Pages/Inicio/Inicio.styles";
import { CaseSection } from "./CasoDeAnalise.styles";
import ReactQuill from "react-quill";

const TabDescAvaliador = () => {
  const [value, setValue] = useState("");

  return (
    <CasesContainer>
      <CaseSection>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </CaseSection>
    </CasesContainer>
  );
};

export default TabDescAvaliador;
