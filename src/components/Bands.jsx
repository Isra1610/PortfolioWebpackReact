import { useState } from "react";

import "../styles/Bands.css";

const punkRock = {
	band1: "Blink 182",
	band2: "Green Day",
	band3: "The Ataris",
	band4: "Sum 41",
	band5: "Avril Lavigne",
	band6: "The Offpring",
};

const alternativeRock = {
	band1: "Foo Fighters",
	band2: "Muse",
	band3: "Linkin Park",
	band4: "Paramore",
	band5: "30 Seconds To Mars",
};

const metal = {
	band1: "Breaking Benjamin",
	band2: "Slipknot",
	band3: "Rammstein",
	band4: "Dream Theater",
	band5: "Korn",
	band6: "System of a Down",
	band7: "Metallica",
	band8: "Avenged Sevenfold",
};

const Bands = () => {
	const [band, setBand] = useState({});
	return (
		<div className="bands">
			<div className="bandsGeneres">
				<button onClick={() => setBand(punkRock)} className="bandButton">
					Punk Rock ►
				</button>
				<button onClick={() => setBand(alternativeRock)} className="bandButton">
					Rock Alternativo ►
				</button>
				<button onClick={() => setBand(metal)} className="bandButton">
					Metal ►
				</button>
			</div>

			<div className="bandList">
				<ul>
					{Object.keys(band).map((bands) => (
						<li key={bands}>{band[bands]}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Bands;
