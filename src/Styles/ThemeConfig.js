export const lightTheme = {
  body: "#FDFDFD",
  text: "#464255",
  border: "lightgray",
  background: "#F7F7F7",
  success: "#00A389",
  danger: "#FF5B5B",
  warning: "#FFBB54",
  info: "#58CDFF",
};

export const darkTheme = {
  body: "#24232C",
  text: "#FFFFFF",
  border: "darkgray",
  background: "#17161E",
  success: "#00A389",
  danger: "#FF5B5B",
  warning: "#FFBB54",
  info: "#58CDFF",
  disabled: (theme) => (theme === "light" ? "#d1d1d1" : "#353535"),
};
