import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useStateContext } from "../../../hooks";
import { CoinList } from "../services/apiFromCoinGeko";

export default function useGetCoinList({ perPage, page }) {
  const { context } = useStateContext();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(CoinList(context.currency, perPage, page))
      .then((val) => {
        setCoins(val.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });

    // ! Update CoinList each 60 seconds
    // const interval = setInterval(() => {
    //   fetchCoins();
    // }, 60000);

    // return () => clearInterval(interval);
  }, [context.currency, perPage, page]);

  return { coins, loading };
}
