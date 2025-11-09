import React,{ useState, useEffect } from "react";
import {useRef} from "react";
import { TOP5_DATA } from "./../javascript/HorizSlideshow.js";
import axios from "axios";
import CoolBackground from "./CoolBackground";
import PicTop from "./../img/lotgame.jpg"
import "./../css/Home.css"
import "./../css/TrendyGames.css"
import { Line } from "react-chartjs-2";
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


const TrendyGames = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const containerRef = useRef();

	const handleScroll = (scrollAmount) => {
		const newscrollPosition = scrollPosition + scrollAmount;
		setScrollPosition(newscrollPosition);
		containerRef.current.scrollLeft = newscrollPosition;
	};
	const [games, setGames] = useState([]);

	useEffect(()=>{
		const loadData = async() => {
			try {
				const response = await axios.get("http://localhost:3001/api/GameData");
				setGames(response.data);
			} catch (err) {
				console.error("Failed to load game data:", err);
			}
		};

		loadData();
	},[]);

		const chartData = {
		labels: games.map(item => item.label),
		datasets: [
			{
				label: 'Gameplay (hours)',
				data: games.map(item => item.gameplay),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				tension: 0.4
			}
		]
	};

	// Chart options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Gameplay Trends'
			}
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};

	return (
		<main>
			<CoolBackground/>
			<section className="top-trendy">
				<div className="line-chart">
					{games.length > 0 ? (
						<Line data={chartData} options={options} />
					) : (
						<p>Loading chart...</p>
					)}
				</div>
				<div className="games-trendy" ref={containerRef}>
					<div className="content-box-trendy">
						{TOP5_DATA.map((item, index) => (
							<div className="card-trendy" key={index}>
								<button><img src={item.id} alt={`Slide ${index + 1}`} /></button>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="split">
				<div className="split-one">
					<h2>Top New Releases</h2>
					<p>Want to see what hitting on the new shelf</p>
				</div>
				<div className="split-two">
					<img src={PicTop}></img>
				</div>
			</section>
	   </main>
	);
};
   
export default TrendyGames;