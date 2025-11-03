import {Link} from "react-router-dom";
import {useState} from "react";
import "./../css/Navigation.css";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
  
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<nav id="main-nav">

			<a onClick={toggleMenu} id="toggle-nav" href="#" className={menuOpen ? 'open' : ''}>
				<div></div>
				<div></div>
				<div></div>
			</a>
						
			 <ul id="columns" className={menuOpen?"":"hide-small"}>
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