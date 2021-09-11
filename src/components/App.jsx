import "../styles/App.css";
import ButtonsHeadBar from "./ButtonsHeadBar";
import Container from "./Container";

const App = () => {
	return (
		<div className="main">
			<ButtonsHeadBar />
			<Container />
			<script src="../Scripts/index.js"></script>
		</div>
	);
};

export default App;
