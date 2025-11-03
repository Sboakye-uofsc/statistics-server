import "./../css/HorizSlideshow.css"
import "./../javascript/HorizSlideshow.js"
import {useRef, useState} from "react";
import { SAMPLE_DATA } from "./../javascript/HorizSlideshow.js";

const ITEM_WIDTH = 300;

const HorizSlideshow = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

	const containerRef = useRef();

	const handleScroll = (scrollAmount) => {
		const newscrollPosition = scrollPosition + scrollAmount;
		setScrollPosition(newscrollPosition);
		containerRef.current.scrollLeft = newscrollPosition;
	};

	return (
		<div className="container">
			<div className="games-reviews" ref={containerRef}>
				<div className="content-box">
					{SAMPLE_DATA.map((item, index) => (
						<div className="card" key={index}>
							<img src={item.id} alt={`Slide ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
					
			<div className="action-btn">
				<a className="arrow" onClick={() => handleScroll(-ITEM_WIDTH)} id="arrow-prev">&lt;</a>
				<a className="arrow" onClick={() => handleScroll(ITEM_WIDTH)} id="arrow-next">&gt;</a>
			</div>
		</div>
	);
};

export default HorizSlideshow;