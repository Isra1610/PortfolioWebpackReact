import earthGlobe from "../icons/earth-globe-geography-svgrepo-com.svg";
import hamburguerIcon from "../icons/hamburguer-svgrepo-com.svg";
import HeadName from "./HeadName";

import "../styles/ButtonsHeadBar.css";

let buttonsHamburguer = document.getElementById("#buttonsHamburguer");
let buttonsEarth = document.getElementById("#buttonsEarth");

console.log(buttonsHamburguer);
console.log(buttonsEarth);

let hamburguerFlag = "";
let earthFlag = "";

const ButtonsHeadBar = () => {
	const buttonHamburguer = () => {
		hamburguerFlag = 1;
		earthFlag = 0;
		if (hamburguerFlag > 0 && earthFlag < 1) {
			buttonsHamburguer.classList.toggle("show");
			if (buttonsHamburguer.classList.contains("show")) {
				buttonsEarth.classList.remove("show");
			}
		}
	};
	const buttonEarth = () => {
		earthFlag = 1;
		hamburguerFlag = 0;
		if (earthFlag > 0 && hamburguerFlag < 1) {
			buttonsEarth.classList.toggle("show");
			if (buttonsEarth.classList.contains("show")) {
				buttonsHamburguer.classList.remove("show");
			}
		}
	};

	return (
		<>
			<div className="main-header">
				<div className="main-header--container">
					<div className="main-header--container-items">
						<HeadName />
						<div className="buttons">
							<button
								className="buttons-idioms-container"
								id="buttonEarth"
								onClick={() => buttonEarth()}
							>
								<img src={earthGlobe} className="idioms-logo" alt="earth" />
								<ul
									className="button-idioms-container--list-mobile"
									id="buttonsEarth"
								>
									<a href="#" className="idioms">
										Spanish
									</a>
									<a href="#" className="idioms">
										English
									</a>
								</ul>
							</button>
							<button
								className="buttons-container"
								id="buttonHamburguer"
								onClick={() => buttonHamburguer()}
							>
								<img
									src={hamburguerIcon}
									className="idioms-logo"
									alt="hamburguer-icon"
								/>
							</button>
						</div>
						<div className="containter-item--info">
							<button className="buttons-container">
								<img src={earthGlobe} alt="earth" className="idioms-logo" />
								<ul className="button-idioms-container--list" id="idiomsButton">
									<a href="#" className="idioms">
										Spanish
									</a>
									<a href="#" className="idioms">
										English
									</a>
								</ul>
							</button>
							<a href="#skills" className="info">
								Habilidades
							</a>
							<a href="#influences" className="info">
								Influencias
							</a>
							<a href="#contact" className="info">
								Contacto
							</a>
						</div>
					</div>
				</div>
			</div>
			<ul className="buttons-info--list" id="buttonsHamburguer">
				<a href="#skills" className="info-list">
					Habilidades
				</a>
				<a href="#influences" className="info-list">
					Influencias
				</a>
				<a href="#contact" className="info-list">
					Contáctame
				</a>
			</ul>
		</>
	);
};

export default ButtonsHeadBar;
