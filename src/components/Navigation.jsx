import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
	return (
		<nav id="main-nav">
			<ul class="columns">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/player-status">Player Stats</Link></li>
				<li><Link to="/reviews">Reviews</Link></li>
				<li><Link to="/trendy-games">Trends</Link></li>
				<li><Link to="/about">About</Link></li>
				{/*<li><Link to="/about">Portfolio</Link></li>*/}
			</ul>
		</nav>
	);
};

export default Navigation;