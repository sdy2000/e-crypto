import { AiOutlineStar } from "react-icons/ai";
import { CoinsTableLoader } from "..";
import { useStateContext } from "../../store";
import { useState } from "react";
import { useEffect } from "react";
import { CoinList } from "../../services/api/apiFromCoinGeko";
import { capitalize, currencyNumber } from "../../utils";
import axios from "axios";
import { Link } from "react-router-dom";

const CoinsTBodyTable = ({ props }) => {
  const { context } = useStateContext();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchCoins = () => {
      axios
        .get(CoinList(context.currency, props.perPage, props.page))
        .then((val) => {
          setCoins(val.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    };
    fetchCoins();

    const interval = setInterval(() => {
      fetchCoins();
    }, 60000);

    return () => clearInterval(interval);
  }, [context.currency, props.perPage, props.page]);

  return (
    <tbody>
      {loading && (
        <>
          {x.map((num, idx) => (
            <CoinsTableLoader key={idx} />
          ))}
        </>
      )}
      {coins &&
        !loading &&
        coins.map((coin) => {
          let profit = coin.price_change_percentage_24h >= 0;
          return coin ? (
            <tr key={coin.id}>
              <td>
                <button
                  className="hover:text-gold hover:scale-110 duration-300"
                  title="Add to Main WatchList and Follow Coin"
                >
                  <AiOutlineStar size={22} />
                </button>
              </td>
              <td className="t-center">
                <span className="hidden sm:table-cell text-start w-full">
                  {coin.market_cap_rank}
                </span>
              </td>
              <td className="t-left">
                <Link to={`/coin/${coin.id}`} key={coin.id}>
                  <div>
                    <img className="w-8 h-8" src={coin.image} alt="coin.id" />
                    <div className="flex flex-col sm:flex-row">
                      <span>{capitalize(coin.id)} </span>
                      <span className="w-full">
                        <span className="rounded-md bg-t px-1 shadow-lg mr-1 sm:hidden text-start">
                          {coin.market_cap_rank}
                        </span>
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="t-right">
                <Link to={`/coin/${coin.id}`} key={coin.id}>
                  $ {currencyNumber(coin.current_price?.toFixed(2))}
                </Link>
              </td>
              <td
                className={`${
                  profit ? "text-green-500" : "text-red-500"
                } t-right  hidden xs:table-cell`}
              >
                <Link to={`/coin/${coin.id}`} key={coin.id}>
                  {profit && "+"}
                  {coin?.price_change_percentage_24h?.toFixed(2)}%
                </Link>
              </td>
              <td className="t-right  hidden md:table-cell">
                $ {currencyNumber(coin.market_cap?.toFixed(2))}
              </td>
              <td className="t-right  hidden lg:table-cell">
                $ {currencyNumber(coin.market_cap_change_24h?.toFixed(2))}
              </td>
              <td className="t-right  hidden xl:table-cell">
                {currencyNumber(coin.circulating_supply?.toFixed(0))}{" "}
                {coin.symbol.toUpperCase()}
              </td>
            </tr>
          ) : (
            <CoinsTableLoader />
          );
        })}
    </tbody>
  );
};
export default CoinsTBodyTable;
