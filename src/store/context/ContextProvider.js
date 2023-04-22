import { createContext, useEffect, useState } from "react";
import { checkTheme, getInitialTheme } from "../../utils";

export const stateContext = createContext();

export const getFreshTheme = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("theme"));
};

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFreshTheme());

  useEffect(() => {
    checkTheme(theme.theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <stateContext.Provider value={{ theme, setTheme }}>
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;
