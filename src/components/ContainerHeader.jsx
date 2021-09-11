import "../styles/ContainerHeader.css";

const ContainerHeader = () => {
	return (
		<div className="container-responsive">
			<div className="container-mobile">
				<div className="container-mobile---home">
					<span className="first-span">
						<div className="Typist nick">
							Soy Israel 👋
							<span className="blinking-cursor">|</span>
						</div>
					</span>
					<span className="second-span">Frontend Developer</span>
					<div className="aboutme">
						Ayudo a empresas y marcas a construir y mejorar su presencia online
						a través del código.
					</div>
				</div>
			</div>
			<div className="container-desktop"></div>
		</div>
	);
};

export default ContainerHeader;
