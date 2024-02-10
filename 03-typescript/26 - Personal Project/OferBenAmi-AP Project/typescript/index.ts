
// import { apDetailsEntry, formExtention } from "./classes/classesAndInterfaces.js";
// import { pushRow } from "./functions/pushRow.js";
class ApDetailsEntry {
	constructor(
		public vendorName: string,
		public modelName: string,
		public hostName: string,
		public macAddr: string,
		public ipAddr: string,
		public Version: string,
		public MarkedForDelete: boolean,
	) { }
}
const localStorageName = "entries";
let entries = loadData();
let activeItemIndex: number | null = null;

interface formExtention extends HTMLFormControlsCollection {
	vendorName: HTMLInputElement;
	modelName: HTMLInputElement;
	hostName: HTMLInputElement;
	macAddr: HTMLInputElement;
	ipAddr: HTMLInputElement;
	Version: HTMLInputElement;
}


function submitForm(event: SubmitEvent) {
	event.preventDefault();
	const elements = (event.target as HTMLFormElement).elements as formExtention;

	let newEntry: ApDetailsEntry = {
		vendorName: elements.vendorName.value,
		modelName: elements.modelName.value,
		hostName: elements.hostName.value,
		macAddr: elements.macAddr.value,
		ipAddr: elements.ipAddr.value,
		Version: elements.Version.value,
		MarkedForDelete: false,
	};

	createAndPushRow(newEntry);
}

//view

function createAndPushRow(submittedApDetails: ApDetailsEntry) {
	const apTable = document.querySelector(".apTable");

	const newRow = document.createElement("tr");

	const vendorNametd = document.createElement("td");
	const modelNametd = document.createElement("td");
	const hostNametd = document.createElement("td");
	const macAddrtd = document.createElement("td");
	const ipAddrtd = document.createElement("td");
	const Versiontd = document.createElement("td");
	const deletetd = document.createElement("td");

	const deleteCheckBox = document.createElement("input");
	deleteCheckBox.setAttribute("type", "checkBox");
	deleteCheckBox.classList.add("deleteCheckBox")
	deletetd.appendChild(deleteCheckBox);

	vendorNametd.textContent = submittedApDetails.vendorName;
	modelNametd.textContent = submittedApDetails.modelName;
	hostNametd.textContent = submittedApDetails.hostName;
	macAddrtd.textContent = submittedApDetails.macAddr;
	ipAddrtd.textContent = submittedApDetails.ipAddr;
	Versiontd.textContent = submittedApDetails.Version;

	newRow.appendChild(vendorNametd);
	newRow.appendChild(modelNametd);
	newRow.appendChild(hostNametd);
	newRow.appendChild(macAddrtd);
	newRow.appendChild(ipAddrtd);
	newRow.appendChild(Versiontd);
	newRow.appendChild(deletetd);
	apTable?.appendChild(newRow);
	// console.dir(apTable);

}

function deleteRow(event: Event) {
	const deleteCheckboxConst = document?.querySelectorAll(".deleteCheckBox") as NodeListOf <HTMLInputElement>
	deleteCheckboxConst.forEach( Element =>{
		if(Element.checked){
			Element.closest("tr")?.remove()
			console.log(Element)
		}
	})
}

function loadData(): ApDetailsEntry[] {
	const savedData = localStorage.getItem(localStorageName);
	if (savedData) {
		return JSON.parse(savedData)
	}
	return new Array<ApDetailsEntry>();
}