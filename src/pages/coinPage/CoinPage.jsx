import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../services/api/apiFromCoinGeko";
import { TopMapBar } from "../../components";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    const fetchCoins = () => {
      axios
        .get(SingleCoin(id))
        .then((data) => {
          setCoin(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchCoins();

    const interval = setInterval(() => {
      fetchCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, [id]);

  console.log(coin);
  return (
    <div className="container flex justify-between items-center">
      <div className="flex flex-col justify-start">
        <div className="">
          <TopMapBar category={"Coins"} id={id} />
          <div className="flex justify-start items-center gap-2"></div>
        </div>
      </div>

      <div className="flex justify-center"></div>
    </div>
  );
};
export default CoinPage;
