let bills = 0;
let totalPeople = 0;
let tipSelected = 0;

function isNumeric(num) {
	return !isNaN(num) && isFinite(num);
}

function bill() {
	bills = Number(document.querySelector("#iconone").value);

	if (bills <= 0) {
		document.getElementById("billerrorMessage").style.display = "block";
	} else {
		document.getElementById("billerrorMessage").style.display = "none";
		calcTotalTip();
	}
}

function calcTotalTip() {
	//tipperperson
	const tips = bills * (tipSelected / 100);
	const tipAmount = document.getElementById("tipAmount");

	if (isNumeric((tips / totalPeople).toFixed(2))) {
		calcTotalAmount(tips);
		return (tipAmount.innerHTML = `$${(tips / totalPeople).toFixed(2)}`);
	}
}

function calcTotalAmount(tips) {
	const person = ((bills * tips) / totalPeople).toFixed(2);
	const totalPerson = document.getElementById("totalAmount");

	if (isNumeric(person)) {
		return (totalPerson.innerHTML = `$${person}`);
	}
}

function people(event) {
	totalPeople = Number(event.target.value);

	if (totalPeople <= 0) {
		document.getElementById("peopleErrorMessage").style.display = "block";
	} else {
		document.getElementById("peopleErrorMessage1").style.display = "none";
		calcTotalTip();
	}
}

function custom(event) {
	let tipNode = document.getElementsByClassName("arcyan")[0];
	if (tipNode !== undefined) {
		tipNode.classList.remove("arcyan");
	}
	event.target.className += "arcyan";

	tipSelected = Number(event.target.value);

	if (tipSelected < 0) {
		document.getElementById("tipError").style.display = "block";
	} else {
		document.getElementById("tipError").style.display = "none";
		calcTotalTip();
	}
}

function reset() {
	const inputNodeList = document.getElementsByTagName("INPUT");
	for (const node of inputNodeList) {
		node.value = "";
	}

	bills = 0;
	totalPeople = 0;
	tipSelected = 0;

	const node = document.getElementsByClassName("arcyan")[0];
	if (node !== undefined) {
		node.classList.remove("arcyan");
	}

	const errorNodeList = document.getElementsByClassName("error-message");
	for (const node of errorNodeList) {
		node.style.display = "block";
	}
	document.getElementById("tipAmount").innerText = "$0.00";
	document.getElementById("totalAmount").innerText = "$0.00";
}

window.moveCursor = (el, pos) => {
	if (el.setSelectionRange) {
		el.setSelectionRange(pos, pos);
	} else if (el.createTextRange) {
		const range = el.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select();
	}
};
moveCursor(input, End);
