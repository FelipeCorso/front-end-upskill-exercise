import { Report } from "./report";
import { randomInteger } from "../../../utils/randomInt";
import { HitBox } from "./hitbox";
import { HITBOX_TYPES } from "./hitbox";

export class Game {
	constructor() {
		this.reset();
	}

	hit = (hittedObject) => {
		const clonedHittedObject = { ...hittedObject };
		this.hittedHistory.push(clonedHittedObject);
		console.log(clonedHittedObject);
		delete this.hitboxes[clonedHittedObject.id];
		this.report.addToReport(
			this.hittedHistory[this.hittedHistory.length - 1],
			clonedHittedObject
		);
	};

	startGame = () => {
		this.reset();
		this.report.reset();
		this.createHitBoxes();
	};

	createHitBoxes = () => {
		this.hitboxes = {};
		const amountOfSquares = randomInteger(4, 43);
		for (let i = 0; i < amountOfSquares; i++) {
			this.hitboxes[i] = new HitBox(i, HITBOX_TYPES[randomInteger(0, 2)]);
		}
	};

	reset = () => {
		this.hitboxes = {};
		this.hittedHistory = [];
		this.report = new Report();
	};
}
