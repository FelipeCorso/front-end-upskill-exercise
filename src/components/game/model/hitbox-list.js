import { HitBox } from "./hitbox";
import { HITBOX_TYPES } from "./hitbox/types";
import { randomInteger } from "../../../utils/randomInt";

export class HitBoxList {
	constructor() {
		this._list = {};
	}

	createHitBoxes = () => {
		const amountOfSquares = randomInteger(1, 4);
		for (let i = 0; i < amountOfSquares; i++) {
			this._list[i] = new HitBox(i, HITBOX_TYPES[randomInteger(0, 2)]);
		}
	};

	reset = () => {
		this._list = {};
	};
}
