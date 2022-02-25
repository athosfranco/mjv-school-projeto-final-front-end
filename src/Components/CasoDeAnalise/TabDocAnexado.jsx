import React from "react";
import {
  DocTable,
  DocTableBody,
  DocTableHead,
  DocTableRow,
  DocTableRowBody,
  TabDocAnexadoContainer,
} from "./CasoDeAnalise.styles";

const TabDocAnexado = () => {
  return (
    <TabDocAnexadoContainer>
      {" "}
      <DocTable>
        <DocTableHead>
          <DocTableRow>
            <th>Data de envio</th>
            <th>Laudo</th>
            <th>Tipo de documento</th>
            <th>Assunto</th>
          </DocTableRow>
        </DocTableHead>
        <DocTableBody>
          {" "}
          <DocTableRowBody>
            <td>15/08/2017</td>
            <td>185</td>
            <td>.pdf</td>
            <td>Lorem ipsum dolor sit.</td>
          </DocTableRowBody>
          <DocTableRowBody>
            <td>28/12/2012</td>
            <td>185</td>
            <td>.pdf</td>
            <td>Lorem ipsum dolor sit.</td>
          </DocTableRowBody>
          <DocTableRowBody>
            <td>25/02/2022</td>
            <td>185</td>
            <td>.pdf</td>
            <td>Lorem ipsum dolor sit.</td>
          </DocTableRowBody>
        </DocTableBody>
      </DocTable>{" "}
    </TabDocAnexadoContainer>
  );
};

export default TabDocAnexado;
