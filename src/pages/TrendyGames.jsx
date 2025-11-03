import CoolBackground from "./CoolBackground";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./../css/Home.css"

const TrendyGames = () => {
	 const data = [
		  { x: 100, value: 860 },
		  { x: 200, value: 1140 },
		  { x: 300, value: 1060 },
		  { x: 400, value: 5000 },
		  { x: 500, value: 1070 },
		  { x: 600, value: 1110 },
		  { x: 700, value: 1900 },
		  { x: 800, value: 2210 },
		  { x: 900, value: 7830 },
		  { x: 1000, value: 2478 }
	 ];

	 return (
		<main>
			<CoolBackground/>
			<section className='gameplay-section'>
				<div className='title-gameplay'>
					<h1>Gameplay and Status</h1>
				</div>
				<div className="chart-container">
					<ResponsiveContainer width="100%" height={400}>
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="x" />
							<YAxis />
							<Tooltip />
							<Line type="monotone" dataKey="value" stroke="red" dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</section>
	   </main>
	 );
};
   
export default TrendyGames;