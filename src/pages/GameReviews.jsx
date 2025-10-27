import {Link} from "react-router-dom";
import CoolBackground from "./CoolBackground";
import Peak from "../img/peak.png";
import Castle from "../img/castle.png";
import Rivals from "../img/rivals.png";
import "./../css/GameReviews.css"

const GameReviews = () => {
	return (
		<main>
			<div>
				<CoolBackground />
				<h1 id="title-reviews">Game Reviews</h1>

				<div>
					<nav id="review-nav">
						<ul class="reviews">
							<li><Link to="#">All</Link></li>
							<li><Link to="#">Adventure</Link></li>
							<li><Link to="#">Casual</Link></li>
							<li><Link to="#">Puzzle</Link></li>
							<li><Link to="#">Shooter</Link></li>
						</ul>
					</nav>
				</div>

				<div id="game-row">
					<h2>Placeholder</h2>
					<div id="game-row-background">
						<img id="gamepic" src={Peak} alt="Peak" />
						<img id="gamepic" src={Castle} alt="Castle" />
						<img id="gamepic" src={Rivals} alt="Rivals" />

						<Link to="#" id="arrow-prev">&lt;</Link>
						<Link to="#" id="arrow-next">&gt;</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default GameReviews;