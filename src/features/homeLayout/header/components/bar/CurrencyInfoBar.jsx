import { Link } from "react-router-dom";
import { currencyNumber } from "../../../../../utils";
import { useStateContext } from "../../../../../hooks";
import { useGetForCurrencyInfoBar } from "../../hooks/useGetForCurrencyInfoBar";

const CurrencyInfoBar = () => {
  const { context } = useStateContext();
  const { currencyInfo, error } = useGetForCurrencyInfoBar();

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
          {context.symbol}
          {currencyInfo.total_market_cap?.usd &&
            currencyNumber(currencyInfo.total_market_cap?.usd.toFixed(0))}
        </Link>
        24h Vol:{" "}
        <Link to="">
          {context.symbol}
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
export default CurrencyInfoBar;
