import dj from "../icons/dj.png";
import gamer from "../icons/gamer.png";

import "../styles/Influences.css";

const Influences = () => {
	return (
		<div id="influences" name="targetInfluences">
			<div className="influences-container">
				<div className="influences-header">
					<span className="ifluences-header--span">INFLUENCIAS</span>
				</div>
				<div className="influences-body">
					<div className="incluences-music">
						<div className="influences-music--title">
							<div className="musicIcon">
								<img src={dj} alt="programer" className="music-icon" />
							</div>
							<span className="influences-music--title-span">
								<b>
									Música:
									<br />
								</b>
								<p>
									"Thank God for Punk Rock"
									<br />
									-Travis Barker
								</p>
							</span>
						</div>
						<div className="influences-music--message">
							<span className="influences-music--message-span">
								Empezar a escuchar música
								<br />
								en ingles a temprana edad me
								<br />
								influencio a aprender el idioma y<br />
								con ello entender mejor los
								<br />
								lenguajes de programación.
							</span>
						</div>
						<div className="influences-music--title">
							<span className="influences-music-bands--title-span">
								Alguna bandas que disfruto...
							</span>
						</div>
						<div className="influences-music-card">
							<div className="img-container"></div>
							<div className="bands">
								Blink 182 - Sum 41 - The Ataris - Green Day - Avril Lavigne -
								MCR - The Offpring - Simple Plan - Breaking Benjamin
							</div>
						</div>
					</div>
					<div className="influences-videoGames">
						<div className="gamerIcon">
							<img src={gamer} alt="gamer" className="gamer-icon" />
						</div>
						<div className="influences-videoGames--title">
							<span className="influences-videoGames--title-span">
								Video Juegos:
								<p>
									Mi atracción a los computadores y a programar empezo desde
									pequeño... obtuve mi primera consola de video
									<br />a los 5 años y mi primer computador a los 9 años, odiaba
									madrugar
									<br />
									al colegio pero nunca odié madrugar los fines de semana para
									jugar
									<br />
									<b>Age of Empires I</b>.
								</p>
							</span>
						</div>
						<div className="influences-videoGames--message">
							<span className="influences-videoGames--message-span">
								"Busca un trabajo que no te de pereza madrugar un Sabado"
							</span>
						</div>
						<div className="influences-videoGames--title">
							<span className="influences-video-Games--title-span">
								Los Video Juegos no son solo eso, tambien nos traen distintas
								formas de pensar.
							</span>
						</div>
						<div className="influences-videoGames-card">
							<div className="img-container2"></div>
							<div className="games">
								"Ya no hay noticias, solo propaganda."
								<br />
								<br />
								-Mirror's Edge.
							</div>
						</div>
						<div className="influences-videoGames-card2">
							<div className="games">
								"Hay cosas que olvidamos... Y hay cosas que no podemos olvidar,
								es gracioso, no sé cual es mas triste."
								<br />
								<br />
								-Silent Hill 3.
							</div>
							<div className="img-container3"></div>
						</div>
						<div className="influences-videoGames-card">
							<div className="img-container4"></div>
							<div className="games">
								"La gente tarda poco en juzgar, pero mucho en corregirse."
								<br />
								<br />
								-Assassin's Creed 2.
							</div>
						</div>
						<div className="influences-videoGames-card2">
							<div className="games">
								"Que alguien se haya ido no significa que te haya dejado."
								<br />
								<br />
								-Star Fox 64.
							</div>
							<div className="img-container5"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Influences;
