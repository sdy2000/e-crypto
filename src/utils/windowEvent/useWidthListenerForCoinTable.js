import { useEffect, useState } from "react";

const useWidthListenerForCoinTable = () => {
  const [tableShow, setTableShow] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 1024 ? setTableShow(true) : setTableShow(false);
    });
  }, []);

  useEffect(() => {
    window.innerWidth >= 1024 ? setTableShow(true) : setTableShow(false);
  }, []);

  return tableShow;
};
export default useWidthListenerForCoinTable;
