import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CurrencyInfo } from "../../services/api/apiFromCoinGeko";
import axios from "axios";
import { currencyNumber } from "../../utils";

const CurrencyInfoTable = () => {
  const [currencyInfo, setCurrencyInfo] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCoins = () => {
      axios
        .get(CurrencyInfo())
        .then((data) => {
          setCurrencyInfo(data.data.data);
        })
        .catch((err) => {
          setError(err);
        });
    };
    fetchCoins();

    // const interval = setInterval(() => {
    //   fetchCoins();
    // }, 120000);

    // return () => clearInterval(interval);
  }, []);
  // Log Error
  error && console.log(error);
  return (
    <ul className="cyp-info-table">
      <li>
        Cryptos:{" "}
        <Link to="">
          {currencyInfo.active_cryptocurrencies &&
            currencyNumber(currencyInfo.active_cryptocurrencies)}
        </Link>
        Exchanges: <Link to="">{currencyInfo.markets}</Link>
        Market Cap:{" "}
        <Link to="">
          $
          {currencyInfo.total_market_cap?.usd &&
            currencyNumber(currencyInfo.total_market_cap?.usd.toFixed(0))}
        </Link>
        24h Vol:{" "}
        <Link to="">
          $
          {currencyInfo.total_volume?.usd &&
            currencyNumber(currencyInfo.total_volume?.usd.toFixed(0))}
        </Link>
        Dominance:{" "}
        <Link to="">
          BTC: {currencyInfo.market_cap_percentage?.btc.toFixed(1)}% ETH:{" "}
          {currencyInfo.market_cap_percentage?.eth.toFixed(1)}%
        </Link>
      </li>
    </ul>
  );
};
export default CurrencyInfoTable;
