import "./../css/Home.css";
import PicChart from "./../img/Copy of StatBoard.png";

const Home2 = () => {
	 return (
	   <main>
			<section className='home-gameplay'>
				<div className='h2-home'>
					<h1>Gameplay and Status</h1>
				</div>

				<div className="h2-chart">
					<img src={PicChart}></img>
				</div>
			</section>
	   </main>
	 );
   };
   
export default Home2;