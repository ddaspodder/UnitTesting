import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

const Home = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme.name === "light" ? changeTheme("dark") : changeTheme("light");
  };

  return (
    <div>
      <h1 style={{ color: theme.foreground }}>Home</h1>
      <div>
        <button
          type="button"
          className={theme.name === "light" ? "btn btn-dark" : "btn btn-light"}
          onClick={toggleTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Home;
