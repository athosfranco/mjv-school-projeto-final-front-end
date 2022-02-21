//Funçoes generalistas

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getFormattedDate = (date, returnType) => {
  const tempDate = date.split("T");
  const tempDate2 = tempDate[0].split("-");
  const dia = tempDate2[2];
  const mes = tempDate2[1];
  const ano = tempDate2[0];
  const tempHorario = tempDate[1].split(":");
  const horario = `${tempHorario[0]}:${tempHorario[1]}`;
  if (returnType === "dd/mm/yy") {
    return `${dia}/${mes}/${ano}`;
  } else if (returnType === "dd.mm.yy") {
    return `${dia}.${mes}.${ano}`;
  } else if (returnType === "dd/mm/yy/hr") {
    return `${dia}/${mes}/${ano} às ${horario}`;
  } else if (returnType === "dd.mm.yy.hr") {
    return `${dia}.${mes}.${ano} às ${horario}`;
  } else if (returnType === "hr") {
    return `${horario}`;
  } else {
    return date;
  }
};
