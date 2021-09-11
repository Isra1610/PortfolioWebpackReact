import Contact from "./Contact";
import ContainerHeader from "./ContainerHeader";
import Influences from "./Influences";
import Skills from "./Skills";

import "../styles/Container.css";

const Container = () => {
	return (
		<div className="container">
			<ContainerHeader />
			<Skills />
			<Influences />
			<Contact />
		</div>
	);
};

export default Container;
