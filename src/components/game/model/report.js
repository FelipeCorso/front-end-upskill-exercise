import { HITBOX_TYPES } from "./hitbox/types";

export class Report {
	constructor() {
		this.reset();
	}

	addToReport = (previousHittedObject, hittedObject) => {
		this.hits++;
		if (
			!!previousHittedObject &&
			previousHittedObject.type === hittedObject.type
		) {
			this.streak[hittedObject.type] += 1;
		}
		this.avgClickTime += Date.now();
	};

	compileReport = () => {
		this.endTimestamp = Date.now();
		this.avgClickTime = (this.endTimestamp - this.startTimestamp) / this.hits;
		return {
			avgClickTime: this.avgClickTime,
			streak: { ...this.streak },
			hits: this.hits,
		};
	};

	reset = () => {
		this.startTimestamp = Date.now();
		this.hits = 0;
		this.avgClickTime = 0;
		this.streak = {};
		HITBOX_TYPES.forEach((el) => {
			this.streak[el] = 0;
		});
	};
}
