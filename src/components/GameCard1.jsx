import "../styles/GameCard1.css";

const GameCard1 = (props) => {
	return (
		<div className="influences-videoGames-card">
			<div className={props.card}></div>
			<div className="games">
				{props.message}
				<br />
				<br />
				{props.game}
			</div>
		</div>
	);
};

export default GameCard1;
