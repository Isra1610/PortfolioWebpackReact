import "../styles/index.scss";
import Recipes from "./Recipes";
import Portraits from "./Portraits";

const App = () => {
	return (
		<>
			{/* <section className="hero"></section> */}
			<main>
				<section>
					<h1>Oh, Hi React</h1>
				</section>
				<Portraits />
				<Recipes />
			</main>
		</>
	);
};

export default App;
