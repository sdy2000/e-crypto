import { useEffect, useState } from "react";
import { TrendingCoins } from "../services/apiFromCoinGeko";
import { useStateContext } from "../../../hooks";
import axios from "axios";

export default function useGetTrendingCoins(currency) {
  const { context } = useStateContext();

  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(TrendingCoins(context.currency))
      .then((val) => {
        setTrending(val.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });

    // ! Update TopBar each 30 seconds
    // const interval = setInterval(() => {
    //   fetchTrendingCoins();
    // }, 30000);

    // return () => clearInterval(interval);
  }, [context.currency]);

  return { trending, loading };
}
