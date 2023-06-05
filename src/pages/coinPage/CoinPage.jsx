import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../services/api/apiFromCoinGeko";
import { TopMapBar } from "../../components";
import { capitalize, currencyNumber } from "../../utils";
import { Parser } from "html-to-react";
import { useStateContext } from "../../store";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { context } = useStateContext();

  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((data) => {
        setCoin(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // const interval = setInterval(() => {
    //   fetchCoins();
    // }, 30000);

    // return () => clearInterval(interval);
  }, [id]);

  return (
    coin && (
      <div className="container flex flex-col">
        <div className="flex flex-col justify-start">
          <div className="my-8">
            <TopMapBar category={"Coins"} id={id} />
            <div className="flex justify-start items-center gap-2"></div>
          </div>
        </div>

        <div className="container flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-around">
            <div className="flex flex-col justify-start items-center sm:items-start w-full sm:w-1/3 sm:border-r-2 sm:pr-6">
              <div className="flex flex-col justify-center mb-8">
                <img src={coin.image.large} alt={coin.id} />
                <h2 className="text-5xl font-[1000] text-p text-center sm:text-start">
                  {capitalize(coin.id)}
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-4">
                <dl className="coin-info">
                  <dt>Rank :</dt>
                  <dd>{coin.market_cap_rank}</dd>
                  <dt>Current Price :</dt>
                  <dd>
                    {currencyNumber(
                      coin.market_data.current_price[
                        context.currency?.toLowerCase()
                      ]
                    )}
                  </dd>
                  <dt>Market Cap :</dt>
                  <dd>
                    {currencyNumber(
                      coin.market_data.market_cap[
                        context.currency?.toLowerCase()
                      ].toString()
                    )}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="w-full sm:w-2/3"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-2/3">
              <p className="w-full"> {Parser().parse(coin?.description.en)}.</p>
            </div>
            <div className="w-full md:w-1/3"></div>
          </div>
        </div>
      </div>
    )
  );
};
export default CoinPage;
