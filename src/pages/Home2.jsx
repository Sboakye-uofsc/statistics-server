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

			<section className='featured-games'>
				<div className='featured-header'>
					<h2>Featured Games</h2>
					<p>Explore the most tracked games on our platform</p>
				</div>
				
				<div className='game-cards'>
					<div className='game-card'>
						<h3>Game Title 1</h3>
						<p>Active Players: 2.5M</p>
					</div>
					<div className='game-card'>
						<h3>Game Title 2</h3>
						<p>Active Players: 1.8M</p>
					</div>
					<div className='game-card'>
						<h3>Game Title 3</h3>
						<p>Active Players: 3.2M</p>
					</div>
            	</div>
        	</section>
	   </main>
	 );
   };
   
export default Home2;