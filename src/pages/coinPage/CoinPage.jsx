import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../services/api/apiFromCoinGeko";
import { TopMapBar } from "../../components";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((data) => {
        setCoin(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(coin);
  return (
    <div className="container">
      <TopMapBar category={"Coins"} id={id} />
    </div>
  );
};
export default CoinPage;
