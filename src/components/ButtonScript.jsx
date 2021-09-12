let buttonHamburguer = document.querySelector("#buttonHamburguer");
let buttonsHamburguer = document.querySelector("#buttonsHamburguer");
let buttonEarth = document.querySelector("#buttonEarth");
let buttonsEarth = document.querySelector("#buttonsEarth");

let hamburguerFlag = "";
let earthFlag = "";

buttonHamburguer.addEventListener("click", () => {
	hamburguerFlag = 1;
	earthFlag = 0;
	if (hamburguerFlag > 0 && earthFlag < 1) {
		buttonsHamburguer.classList.toggle("show");
		if (buttonsHamburguer.classList.contains("show")) {
			buttonsEarth.classList.remove("show");
		}
	}
});
buttonEarth.addEventListener("click", () => {
	earthFlag = 1;
	hamburguerFlag = 0;
	if (earthFlag > 0 && hamburguerFlag < 1) {
		buttonsEarth.classList.toggle("show");
		if (buttonsEarth.classList.contains("show")) {
			buttonsHamburguer.classList.remove("show");
		}
	}
});

export default ButtonScript;
