import Navigation from "./Navigation";
import logo from "../img/StatBoard.png";
import "./../css/Header.css"

const Header = () => {
	return (
		<header id="main-header">
			<div class="logo-size">
				<img id="logo" src={logo} alt="Logo" />
			</div>

			
			<Navigation />
			
		</header>
	);
};

export default Header;