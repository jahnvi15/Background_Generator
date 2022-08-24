var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = "CSS property - " + body.style.background + ";";
}
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();
 
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}

function randomcolor(){
	var color11 = randomHexColor();
	var color22 = randomHexColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color11
	+ ", " 
	+ color22
	+ ")";
	css.textContent = "CSS property - " + body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomcolor);


