let bills = 0;
let totalPeople = 0;
let tipSelected = 0;

// function to check if result is a number or not
function isNumeric(num) {
	return !isNaN(num) && isFinite(num);
}

// function to get the value input of bill, convert it to a number and choose whether to display error message.
function bill() {
	bills = Number(document.querySelector("#iconone").value);

	if (bills <= 0) {
		document.getElementById("billerrorMessage").style.display = "block";
	} else {
		document.getElementById("billerrorMessage").style.display = "none";
		// here I call fn to calculate the total tip
		calcTotalTip();
	}
}

// fn to calculate total tip tip per person and when called will render result to page
function calcTotalTip() {
	//
	const tips = bills * (tipSelected / 100);
	const tipAmount = document.getElementById("tipAmount");

	if (isNumeric((tips / totalPeople).toFixed(2))) {
		calcTotalAmount(tips);
		return (tipAmount.innerHTML = `${(tips / totalPeople).toFixed(2)}`);
	}
}

// fn to calculate total amount per person and when called will render result to page
function calcTotalAmount(tips) {
	const person = ((bills + tips) / totalPeople).toFixed(2);
	const totalPerson = document.getElementById("totalAmount");

	if (isNumeric(person)) {
		return (totalPerson.innerHTML = `${person}`);
	}
}
//  fn to get value input of the number of people and choose whether to display error message
function people(event) {
	totalPeople = Number(event.target.value);

	if (totalPeople <= 0) {
		document.getElementById("peopleErrorMessage").style.display = "block";
	} else {
		document.getElementById("peopleErrorMessage").style.display = "none";
		calcTotalTip();
	}
}

function custom(event) {
	let tipNode = document.getElementsByClassName("arcyan");
	if (tipNode == undefined) {
		tipNode.classList.remove("arcyan");
	}
	event.target.className += " arcyan";

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

	const node = document.getElementsByClassName("arcyan-active")[0];
	if (node !== undefined) {
		node.classList.remove("arcyan-active");
	}

	const errorNodeList = document.getElementsByClassName("error-message");
	for (const node of errorNodeList) {
		node.style.display = "block";
	}
	document.getElementById("tipAmount").innerText = " 0.00";
	document.getElementById("totalAmount").innerText = " 0.00";
}
