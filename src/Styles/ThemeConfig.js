export const lightTheme = {
  body: "#FDFDFD",
  text: "#464255",
  border: "lightgray",
  background: "#F7F7F7",
  success: "#00A389",
  danger: "#FF5B5B",
  warning: "#FFBB54",
  info: "#58CDFF",
  primary: "#A91B1C",
  secondary: "#EA5F28",
  terciary: "#EF9A91",
  quatinery: "#F1E6B9",
};

export const darkTheme = {
  body: "#24232C",
  text: "#eeeeee",
  border: "darkgray",
  background: "#17161E",
  success: "#00A389",
  danger: "#FF5B5B",
  warning: "#FFBB54",
  info: "#58CDFF",
  disabled: (theme) => (theme === "light" ? "#d1d1d1" : "#353535"),
  primary: "#A91B1C",
  secondary: "#EA5F28",
  terciary: "#EF9A91",
  quatinery: "#F1E6B9",
};
