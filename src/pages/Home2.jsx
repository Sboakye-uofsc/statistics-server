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
					<h2>Featured Games Review</h2>
					<p>See all the review of your favorite games</p>
				</div>
				
				<div className='game-cards'>
					<div className='game-card'>
						<h3>Games Review 1</h3>
						<p>Something go here</p>
					</div>
					<div className='game-card'>
						<h3>Games Review 2</h3>
						<p>Something go here</p>
					</div>
					<div className='game-card'>
						<h3>Games Review 3</h3>
						<p>Something go here</p>
					</div>
            	</div>
        	</section>
	   </main>
	 );
   };
   
export default Home2;