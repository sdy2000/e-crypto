import { createContext, useEffect, useState } from "react";
import { checkTheme, getInitialTheme } from "../../utils";

export const stateContext = createContext();

export const getFreshContext = () => {
  if (localStorage.getItem("context") === null) {
    localStorage.setItem(
      "context",
      JSON.stringify({
        userId: 0,
        userName: "",
        currency: "USD",
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("context"));
};

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(getFreshContext());

  useEffect(() => {
    checkTheme(context.theme);
    localStorage.setItem("context", JSON.stringify(context));
  }, [context]);

  return (
    <stateContext.Provider value={{ context, setContext }}>
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;
