import React, { useState } from "react";
import { CasesContainer, Table, TableCell, TableHead, TableRow, TableRowValues } from "./Inicio.styles";
import axios from "axios";
import { getFormattedDate } from "../../GeneralFunctions";
import StatusCaso from "../../Components/StatusCaso/StatusCaso";
import CasoDeAnalise from "../../Components/CasoDeAnalise/CasoDeAnalise";

const Casos = ({ casos }) => {
  const fetchUserInfo = (usuarioId) => {
    let user = "dummy";
    // axios
    //   .post(
    //     `http://44.202.73.116:50660/api/Usuario/GetUsuarioById?USR_Id=${usuarioId}&join=true`,

    //     {
    //       auth: {
    //         username: "AccessJustoDevAPI",
    //         password: "e8daa6779d7f418443ade747ac9ed4552efhjnx",
    //       },
    //     }
    //   )
    //   .then((res) => (user = JSON.stringify(res)))
    //   .catch((err) => {
    //     // console.log(err);
    //   });
    return user;
  };

  console.log(casos);

  const [telaDeAnalise, setTelaDeAnalise] = useState(false);

  return (
    <CasesContainer>
      {telaDeAnalise && <CasoDeAnalise />}
      <Table>
        <thead>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Hora</TableHead>
            <TableHead>Paciente</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>Tipo de Caso</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {casos.map((caso) => {
            return (
              <TableRowValues key={caso.CAS_Id} onClick={() => setTelaDeAnalise(!telaDeAnalise)}>
                <TableCell>{getFormattedDate(caso.CAS_DataCriacao, "dd/mm/yy")}</TableCell>
                <TableCell>{getFormattedDate(caso.CAS_DataCriacao, "hr")}</TableCell>
                <TableCell>{fetchUserInfo(caso.Paciente.PAC_UsuarioId)}</TableCell>
                <TableCell>26</TableCell>
                <TableCell>Cirurgia</TableCell>
                <TableCell>
                  <StatusCaso statusId={caso.CAS_StatusCasoId} />
                </TableCell>
              </TableRowValues>
            );
          })}
        </tbody>
      </Table>
    </CasesContainer>
  );
};

export default Casos;
