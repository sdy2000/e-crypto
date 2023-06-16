import { useState } from "react";
import { useStateContext } from "../../hooks";
import { useEffect } from "react";
import axios from "axios";
import { HistoricalChart } from "../../services/api/apiFromCoinGeko";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { ChartDaysGroupButtons, ChartLoader } from "..";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const CoinChart = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { context } = useStateContext();

  useEffect(() => {
    axios
      .get(HistoricalChart(coin.id, days, context.currency))
      .then((data) => {
        setHistoricalData(data.data.prices);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => setHistoricalData();
  }, [coin.id, days, context.currency]);

  return (
    <div className="px-8">
      {!historicalData ? (
        <>
          <ChartLoader />
          <ChartDaysGroupButtons days={days} setDays={setDays} />
        </>
      ) : (
        <>
          <Line
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
            data={{
              labels: historicalData?.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicalData?.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${context.currency.toLowerCase()}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
          />
          <ChartDaysGroupButtons days={days} setDays={setDays} />
        </>
      )}
    </div>
  );
};
export default CoinChart;
