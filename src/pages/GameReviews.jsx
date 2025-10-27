import {Link} from "react-router-dom";
import CoolBackground from "./CoolBackground";
import Peak from "../img/peak.png";
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
						<img id="peak" src={Peak} alt="Peak" />
					</div>
					<Link to="#" id="arrow-prev">&lt;</Link>
					<Link to="#" id="arrow-next">&gt;</Link>
				</div>
			</div>
		</main>
	);
};

export default GameReviews;