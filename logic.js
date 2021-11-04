let reseting =
	"<span id=reset><span id=ones>0</span><span>.</span><span id=cents>00</span></span>";

document.getElementById("iconone").addEventListener("input", bill);

document.getElementById("icontwo").addEventListener("input", people);

document.getElementById("customs").addEventListener("input", custom);

function bill() {
	alert("clicked");
}
function custom() {
	alert("customs");
}

function people() {
	alert("people");
}

function reset() {
	const value = document.getElementById("reset");
	value.innerHTML = reseting;
	document.getElementById("iconone").value = "";
	document.getElementById("icontwo").value = "";
	document.getElementById("customs").value = "";
}
