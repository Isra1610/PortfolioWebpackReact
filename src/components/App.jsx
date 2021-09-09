import "../styles/index.scss";
import Recipes from "./Recipes";
import portrait from "../images/programacion.png";

const App = () => {
	return (
		<>
			<section className="hero"></section>
			<main>
				<section>
					<h1>Oh, Hi React</h1>
				</section>
				<img src={portrait} alt="portraits" width="80" />
				<Recipes />
			</main>
		</>
	);
};

export default App;
