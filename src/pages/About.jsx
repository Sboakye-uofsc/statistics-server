import "./../css/About.css"
import Map from "./../img/fake.png"

const About = () => {
	return (
		<main>
			<div class="aboutme">
				<section id="map-info">
					<h2>About Us</h2>
					<p>bcdskjbfjaekbfvjkaesbc jkadebfkja  fjbsefjbc webfhjebfjka fenbfjhefnmc aefyaaw fnfyuavf acb ajfv fjhevfa fbwe gaevfh chjvwef ahfvuyw fjh</p>
				</section>

				<section>
					<img class="map" src={Map} alt="Map" />
				</section>
			</div>
		</main>
	);
};

export default About;