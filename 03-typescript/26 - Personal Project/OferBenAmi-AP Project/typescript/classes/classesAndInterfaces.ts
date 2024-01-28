export class apDetailsEntry {
	constructor(
		public vendorName: string,
		public modelName: string,
		public hostName: string,
		public macAddr: string,
		public ipAddr: string,
		public Version: string,
	) { }
}

export interface formExtention extends HTMLFormControlsCollection {
	vendorName: HTMLInputElement;
	modelName: HTMLInputElement;
	hostName: HTMLInputElement;
	macAddr: HTMLInputElement;
	ipAddr: HTMLInputElement;
	Version: HTMLInputElement;
}