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

const ChartLoader = () => {
  return (
    <div className="relative w-full h-full items-center dark:bg-gray-800 dark:border-gray-800">
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-40">
        <Line
          data={{
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
          }}
        />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <div className="border-blue border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-32 w-32"></div>
      </div>
    </div>
  );
};
export default ChartLoader;
