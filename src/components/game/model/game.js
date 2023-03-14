import { Report } from "./report";
import { HitBoxList } from "./hitbox-list";

export class Game {
	constructor() {
		this.report = new Report();
		this._hitboxList = new HitBoxList();
		this.hittedHistory = [];
	}

	hit = (hittedObject) => {
		const clonedHittedObject = { ...hittedObject };
		this.hittedHistory.push(clonedHittedObject);
		delete this._hitboxList._list[clonedHittedObject.id];
		this.report.addToReport(
			this.hittedHistory[this.hittedHistory.length - 1],
			clonedHittedObject
		);
	};

	startGame = () => {
		this.reset();
		this.bootstrapHitboxes();
	};

	bootstrapHitboxes = () => this._hitboxList.createHitBoxes();

	reset = () => {
		this.hittedHistory = [];
		this.report.reset();
		this._hitboxList.reset();
	};
}
