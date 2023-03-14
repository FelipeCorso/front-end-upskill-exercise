import { randomInteger } from "../../../../utils/randomInt";

export class HitBox {
	constructor(id, type) {
		this.id = id;
		this.type = type;
		this.x = randomInteger(0, 500);
		this.y = randomInteger(0, 500);
	}
}
