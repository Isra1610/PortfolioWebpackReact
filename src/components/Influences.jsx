import dj from "../icons/dj.png";
import gamer from "../icons/gamer.png";
import GameCard1 from "./GameCard1";
import GameCard2 from "./GameCard2";

import "../styles/Influences.css";
import Bands from "./Bands";

const Influences = () => {
	return (
		<div id="influences" name="targetInfluences">
			<div className="influences-container">
				<div className="influences-header">
					<span className="ifluences-header--span">INFLUENCIAS</span>
				</div>
				<div className="influences-body">
					<div className="incluences-music">
						<div className="musicIcon">
							<img src={dj} alt="programer" className="music-icon" />
						</div>
						<div className="influences-music--title">
							<span className="influences-music--title-span">
								<div className="influences-nick">
									Música
									<br />
								</div>
								<p>
									"Thank God for Punk Rock"
									<br />
									-Travis Barker
								</p>
							</span>
						</div>
						<div className="influences-music--message">
							<span className="influences-music--message-span">
								Empezar a escuchar música en ingles a temprana edad me
								influencio a aprender el idioma y con ello entender mejor los
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
							<Bands />
						</div>
					</div>
					<div className="influences-videoGames">
						<div className="gamerIcon">
							<img src={gamer} alt="gamer" className="gamer-icon" />
						</div>
						<div className="influences-videoGames--title">
							<span className="influences-videoGames--title-span">
								<div className="influences-nick">
									Video Juegos
									<br />
								</div>
								<p>
									Mi atracción a los computadores y a programar empezo desde
									pequeño... obtuve mi primera consola de video a los 5 años y
									mi primer computador a los 9 años, odiaba madrugar al colegio
									pero nunca odié madrugar los fines de semana para jugar{" "}
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
						<GameCard1
							card={"img-container2"}
							message={'"Ya no hay noticias, solo propaganda."'}
							game={"-Mirror's Edge."}
						/>
						<GameCard2
							message={
								'"Hay cosas que olvidamos... Y hay cosas que no podemos olvidar, es gracioso, no sé cual es mas triste."'
							}
							game={"-Silent Hill 3."}
							card={"img-container3"}
						/>
						<GameCard1
							card={"img-container4"}
							message={
								'"La gente tarda poco en juzgar, pero mucho en corregirse."'
							}
							game={"-Assassin's Creed 2."}
						/>
						<GameCard2
							message={
								'"Que alguien se haya ido no significa que te haya dejado."'
							}
							game={"-Star Fox 64."}
							card={"img-container5"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Influences;
