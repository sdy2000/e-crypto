import { useContext } from "react";
import { stateContext } from "../context/ContextProvider";

const useStateContext = () => {
  const { context, setContext } = useContext(stateContext);

  return {
    context,
    setContext: (obj) => {
      setContext({ ...context, ...obj });
    },
  };
};

export default useStateContext;
