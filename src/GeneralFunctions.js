//Funçoes generalistas

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getCurrentDateWithTime = () => {
  const cd = new Date();
  const mes = cd.getMonth() + 1;
  const ano = cd.getFullYear();
  const dia = cd.getDay();
  return `${ano}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}T${
    cd.getHours() < 10 ? "0" + cd.getHours() : cd.getHours()
  }:${cd.getMinutes()}:${cd.getSeconds()}.404Z`;
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
    return `${dia}/${mes}/${ano} ${horario}h`;
  } else if (returnType === "dd.mm.yy.hr") {
    return `${dia}.${mes}.${ano} às ${horario}`;
  } else if (returnType === "hr") {
    return `${horario}`;
  } else {
    return date;
  }
};

export const formatarDataSemHora = (data) => {
  const date = data.split("-");
  return `${date[2]}/${date[1]}/${date[0]}`;
};

export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const formatarIdade = (anoNasc) => {
  const cd = new Date();
  const anoNascFormatado = anoNasc.split("-")[0];

  const anoAtual = parseInt(cd.getFullYear());

  return anoAtual - parseInt(anoNascFormatado);
};
