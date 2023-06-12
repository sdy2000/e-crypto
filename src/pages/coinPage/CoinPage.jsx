import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../services/api/apiFromCoinGeko";
import { CoinChart, TopMapBar } from "../../components";
import { capitalize, currencyNumber, fixedDate } from "../../utils";
import { Parser } from "html-to-react";
import { useStateContext } from "../../store";
import { faker } from "@faker-js/faker";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { context } = useStateContext();
  const [recentComment, setRecentComment] = useState([]);

  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((data) => {
        setCoin(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    let comments = [];
    for (let i = 1; i <= 5; ++i) {
      let commentInfo = {
        id: 0,
        image: "",
        userName: "",
        comment: "",
        date: 0,
      };
      commentInfo.id = i;
      commentInfo.image = faker.image.avatar();
      commentInfo.userName = faker.internet.userName();
      commentInfo.comment = faker.lorem.lines();
      commentInfo.date = faker.date.recent();

      comments.push(commentInfo);
    }

    setRecentComment(comments);
    // const interval = setInterval(() => {
    //   fetchCoins();
    // }, 30000);

    // return () => clearInterval(interval);

    return () => {
      setCoin();
    };
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

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-around">
            <div className="flex flex-col justify-start items-center md:items-start w-full md:w-1/3 md:border-r-2 md:pr-6">
              <div className="flex flex-col justify-center mb-8">
                <img src={coin.image.large} alt={coin.id} />
                <h2 className="text-5xl font-[1000] text-p text-center md:text-start">
                  {capitalize(coin.id)}
                </h2>
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4">
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
            <div className="w-full md:w-2/3">
              <CoinChart coin={coin} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-0">
            <div className="mx-8 md:mx-0 md:w-2/3 pr-12">
              <p className="w-full text-p">
                {Parser().parse(coin?.description.en)}.
              </p>
            </div>
            <div className="mx-8 md:mx-0 md:w-1/3">
              <div className="bg-t w-full h-full rounded-3xl py-8 px-6">
                <h3 className="text-p text-3xl font-bold mb-12">Comments</h3>
                <div className="flex flex-col gap-5">
                  {recentComment.map((comment) => {
                    return (
                      <div
                        className="flex flex-col gap-3 px-4"
                        key={comment.id}
                      >
                        <div className="flex justify-start items-center gap-2">
                          <img
                            className="w-16 h-16 rounded-full"
                            src={comment.image}
                            alt={comment.userName}
                          />
                          <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-p text-sm">
                              {comment.userName}
                            </h5>
                            <span className="text-t">
                              {fixedDate(comment.date)}
                            </span>
                          </div>
                        </div>
                        <p className="text-s text-sm">{comment.comment}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default CoinPage;
