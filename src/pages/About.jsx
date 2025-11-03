import "./../css/About.css"
import Map from "./../img/fake.png"
import {useState} from "react";

const About = () => {
	const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f37e2695-79d6-4f2e-b7fc-4805a589a84a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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

			<div id="form">
				<h2>Feel Free to Ask Question</h2>
				<form id="contact-form" onSubmit={onSubmit}>
					<input id="contact-input" type="text" name="name" required/>
					<input id="contact-input" type="email" name="email" required/>
					<textarea  id="message-textarea" name="message" required></textarea>

					<button id="submit" type="submit">Submit Form</button>

				</form>
				<span>{result}</span>
			</div>
		</main>
	);
};

export default About;