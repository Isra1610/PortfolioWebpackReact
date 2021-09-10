import "../styles/_Portraits.scss";
import portrait from "../images/yo.jpg";
import portrait2 from "../images/mamor.jpg";
import heart from "../images/heart.png";

const Portraits = () => {
	return (
		<div className="portraitsContainer">
			<img src={portrait} alt="portrait" className="portraits" />
			<img src={heart} alt="heart" className="heart" />
			<img src={portrait2} alt="portrait" className="portraits" />
		</div>
	);
};

export default Portraits;
