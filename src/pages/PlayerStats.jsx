import CoolBackground from "./CoolBackground";
import { Line } from "react-chartjs-2";
import revenueData from "./../jsonData/graph-game.json"
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

const PlayerStats = () => {
  const data = {
    labels: revenueData.map((d) => d.label),
    datasets: [
      {
        label: "Revenue",
        data: revenueData.map((d) => d.revenue),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <main>
      <div>
        <CoolBackground />
      </div>
      <div>
        <Line data={data} />
      </div>
    </main>
  );
};

export default PlayerStats;