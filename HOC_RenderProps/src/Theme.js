import React from "react";
export const themes = [
  { name: "light", foreground: "#000", background: "#fff" },
  { name: "dark", foreground: "#fff", background: "#000" },
];

export const getThemeByName = (name) => {
  return themes.find((theme) => theme.name === name);
};

export const defaultTheme = {
  theme: getThemeByName("light"),
  changeTheme: () => {},
};

export const alternateTheme = {
  theme: getThemeByName("dark"),
  changeTheme: () => {},
};

export const ThemeContext = React.createContext(defaultTheme);
