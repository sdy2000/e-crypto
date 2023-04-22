import { useContext } from "react";
import { stateContext } from "../context/ContextProvider";

export function useStateTheme() {
  const { theme, setTheme } = useContext(stateContext);

  return {
    theme,
    setTheme: (obj) => {
      setTheme({ ...setTheme, ...obj });
    },
  };
}
