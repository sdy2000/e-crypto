import { Link } from "react-router-dom";
import { currencyNumber } from "../../utils";
import { useStateContext } from "../../store";

const CoinSliderCard = ({ coin }) => {
  const { context } = useStateContext();
  let profit = coin.price_change_percentage_24h >= 0;
  return (
    <Link
      className="flex flex-col justify-center items-center"
      to={`/coin/${coin.id}`}
    >
      <img className="h-16 w-16" src={coin.image} alt={coin.name} />
      <div className="flex justify-center items-center gap-2">
        <span className="text-dfp font-semibold">{coin?.symbol}</span>
        <span
          className={`${profit ? "text-green-700" : "text-red-800"} text-xs`}
        >
          {profit && "+"}
          {coin?.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>
      <span className="font-bold text-dfp">
        {context.symbol} {currencyNumber(coin?.current_price.toFixed(2))}
      </span>
    </Link>
  );
};
export default CoinSliderCard;
