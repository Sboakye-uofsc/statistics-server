import "./../css/Home.css"
import Home2 from './Home2';

const Home = () => {
     return (
       <main>
			<div className="home-container">
				<div id="main-page-quotes">
					<section className="quotes">
						<h1>Where Statistics Meets Gaming</h1>
						<p> A public gaming statistics platform that tracks and analyzes player habits across various games. View the latest percentages and graphs for all your favorite video games.</p>
					</section>

					<div className="stat-right-side">
						<div className="circle"></div>
					</div>
				</div>
			</div>
			<Home2 />
       </main>
     );
   };
   
export default Home;