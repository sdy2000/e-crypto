import axios from "axios";
import { useState } from "react";
import { CoinList } from "../../services/api/apiFromCoinGeko";
import { useStateContext } from "../../store";
import { useEffect } from "react";
import { capitalize, currencyNumber } from "../../utils";
import { AiOutlineStar } from "react-icons/ai";
import CoinsTableLoader from "../../components/loader/CoinsTableLoader";

const CoinsTable = () => {
  const { context } = useStateContext();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      await axios
        .get(CoinList(context.currency))
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
  }, [context.currency]);

  console.log(coins);
  return (
    <div className="max-w-[1440px] mx-auto px-12 bg-s py-12">
      <table className="coins-table">
        <thead>
          <tr>
            <th> </th>
            <th className="hidden md:table-cell t-center ml-4">#</th>
            <th className="t-left">Name</th>
            <th className="t-right">Price</th>
            <th className="t-right">24h %</th>
            <th className="t-right">Market Cap</th>
            <th className="t-right">Volume(24h)</th>
            <th className="t-right">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {loading && <CoinsTableLoader />}
          {coins &&
            coins.map((coin) => {
              let profit = coin.price_change_percentage_24h >= 0;
              return coin ? (
                <tr key={coin.id}>
                  <td>
                    <button
                      className="hover:text-gold hover:scale-110 duration-300"
                      title="Add to Main Watchlist and Follow Coin"
                    >
                      <AiOutlineStar size={22} />
                    </button>
                  </td>
                  <td className="t-center">
                    <span className="text-start w-full">
                      {coin.market_cap_rank}
                    </span>
                  </td>
                  <td className="t-left">
                    <div>
                      <img className="w-8 h-8" src={coin.image} alt="coin.id" />
                      <span>{capitalize(coin.id)} </span>
                      <span>{coin.symbol.toUpperCase()}</span>
                    </div>
                  </td>
                  <td className="t-right">
                    $ {currencyNumber(coin.current_price.toFixed(2))}
                  </td>
                  <td
                    className={`${
                      profit ? "text-green-500" : "text-red-500"
                    } t-right`}
                  >
                    {profit && "+"}
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="t-right">
                    $ {currencyNumber(coin.market_cap.toFixed(2))}
                  </td>
                  <td className="t-right">
                    $ {currencyNumber(coin.market_cap_change_24h.toFixed(2))}
                  </td>
                  <td className="t-right">
                    {currencyNumber(coin.circulating_supply.toFixed(0))}{" "}
                    {coin.symbol.toUpperCase()}
                  </td>
                </tr>
              ) : (
                <CoinsTableLoader />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default CoinsTable;
