import { useState } from "react";
import { useStateContext } from "../../store";
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

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

const CoinChart = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { context } = useStateContext();
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septembers",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        labels: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderColor: "#EEBC1D",
      },
    ],
  };

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
    <div>
      {!historicalData ? (
        <>
          <div className="relative w-full h-full items-center dark:bg-gray-800 dark:border-gray-800">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-40">
              <Line data={data} />
            </div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
              <div className="border-blue border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-32 w-32"></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            {chartDays.map((day) => (
              <button
                className={`${
                  day.value === days ? "bg-[#EEBC1D] text-black" : "text-s "
                } font-bold border-2 border-[#EEBC1D] rounded-lg shadow-lg px-6 py-1`}
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label}
              </button>
            ))}
          </div>
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
          <div className="flex justify-center items-center gap-6 mt-8">
            {chartDays.map((day) => (
              <button
                className={`${
                  day.value === days ? "bg-[#EEBC1D] text-black" : "text-s "
                } font-bold border-2 border-[#EEBC1D] rounded-lg shadow-lg px-6 py-1`}
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CoinChart;
