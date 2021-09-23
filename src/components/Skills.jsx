import "../styles/Skills.css";
import programer from "../icons/programacion.png";

const Skills = () => {
	return (
		<>
			<div id="skills" name="targetSkills">
				<div className="container-skills">
					<div className="skills-header">
						<span className="skills-span">HABILIDADES</span>
						<div className="programer-icon">
							<img src={programer} alt="programer" className="programerIcon" />
						</div>
					</div>
					<div className="skills-cards">
						<div className="card-front-developer">
							<div className="card-name1">
								<div className="card-row"></div>
								<div className="card-nick">
									<span className="card-span">FRONTEND</span>
									<span className="card-span">DEVELOPER</span>
								</div>
							</div>
							<div className="card-info">
								<div className="card-info--skils" id="hola">
									JavaScript - React - Redux - Css - SASS - HTML5
								</div>
							</div>
						</div>
						<div className="card-agile">
							<div className="card-name2">
								<div className="card-row"></div>
								<div className="card-nick">
									<span className="card-span">AGILE</span>
									<span className="card-span">MINDSET</span>
								</div>
							</div>
							<div className="card-info">
								<div className="card-info--skils">Git</div>
							</div>
						</div>
						<div className="card-backend">
							<div className="card-name3">
								<div className="card-row"></div>
								<div className="card-nick">
									<span className="card-span">BACKEND</span>
									<span className="card-span">DEVELOPER</span>
								</div>
							</div>
							<div className="card-info">
								<div className="card-info--skils">
									PHP - NodeJs - Java/Springboot - SQL
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
