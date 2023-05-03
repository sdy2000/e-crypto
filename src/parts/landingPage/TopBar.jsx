import axios from "axios";
import WaterWave from "react-water-wave";
import { TrendingCoins } from "../../services/api/apiFromCoinGeko";
import { useStateContext } from "../../store";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { CoinSliderCard } from "../../components";

const TopBar = () => {
  const { context } = useStateContext();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const { data } = await axios.get(TrendingCoins(context.currency));

      setTrending(data);
    };
    fetchTrendingCoins();
  }, [context]);

  const items = trending.map((coin) => {
    return coin && <CoinSliderCard coin={coin} />;
  });

  return (
    <div className="w-full h-72">
      <WaterWave
        imageUrl={"./assets/img/banner2.jpg"}
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      >
        {() => (
          <div className="container flex flex-col justify-center items-center gap-3 py-6 md:py-10">
            <h1 className="text-dfp text-2xl lg:text-3xl font-extrabold">
              <span className="text-silver text-3xl lg:text-4xl -rotate-45">
                E
              </span>{" "}
              Crypto
            </h1>
            <h3 className="text-dft text-sm text-center">
              Get All The Info Regarding Your Favorite Crypto Currency
            </h3>
            <div className="mt-8 w-full">
              <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={{
                  0: { items: 2 },
                  550: { items: 3 },
                  650: { items: 4 },
                  768: { items: 5 },
                  1024: { items: 6 },
                }}
                autoPlay
                items={items}
              />
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};
export default TopBar;
