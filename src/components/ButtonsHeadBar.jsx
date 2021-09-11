import earthGlobe from "../icons/earth-globe-geography-svgrepo-com.svg";
import hamburguerIcon from "../icons/hamburguer-svgrepo-com.svg";
import "../styles/Buttons.css";

const ButtonsHeadBar = () => {
	return (
		<>
			<div className="main-header">
				<div className="main-header--container">
					<div className="main-header--container-items">
						<div className="containter-item--title">
							<span className="title__nick">Israel</span>
							<span className="title__nick2">R</span>
						</div>
						<div className="buttons">
							<button className="buttons-idioms-container" id="buttonEarth">
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
							<button className="buttons-container" id="buttonHamburguer">
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
