import "../styles/GameCard2.css";

const GameCard1 = (props) => {
	return (
		<div className="influences-videoGames-card2">
			<div className="games">
				{props.message}
				<br />
				<br />
				{props.game}
			</div>
			<div className={props.card}></div>
		</div>
	);
};

export default GameCard1;
