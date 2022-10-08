import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import HOCPage from "./pages/HOCPage";
import CustomHooks from "./pages/CustomHooks";
import RenderPropsPage from "./pages/RenderPropsPage";
import { getThemeByName, ThemeContext, defaultTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useState(defaultTheme.theme);

  const themeValue = {
    theme: theme,
    changeTheme: (name) => {
      setTheme(getThemeByName(name));
    },
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <div
        className="App"
        style={{ height: "100vh", background: theme.background }}
      >
        <Router>
          <Routes>
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/hoc" element={<HOCPage />} />
            <Route path="/custom-hook" element={<CustomHooks />} />
            <Route path="/render-props" element={<RenderPropsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
