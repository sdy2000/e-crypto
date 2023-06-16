import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencyInfo } from "../services/apiFromCoinGeko";

export const useGetForCurrencyInfoBar = () => {
  const [currencyInfo, setCurrencyInfo] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(CurrencyInfo())
      .then((data) => {
        setCurrencyInfo(data.data.data);
      })
      .catch((err) => {
        setError(err);
      });

    // ! Update CurrencyInfoBar each 120 seconds
    // const interval = setInterval(() => {
    //   fetchCoins();
    // }, 120000);

    // return () => clearInterval(interval);
  }, []);
  return { currencyInfo, error };
};
