var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradientB");

function setGradient(){
	
	body.style.background = 
	"Linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";

	text1.textContent = body.style.background + "; ";
	text2.textContent = "The Left Hex Code Is " + color1.value + ", " + "The Right Hex Code Is " + color2.value;

	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



