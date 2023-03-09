import Report from "./report"
import { randomInteger } from "../../../utils/randomInt";
import { HitBox, HITBOX_TYPES } from "../../canvas/hit-box";

export class Game {
    
    constructor() {
        this.reset();
    }

    hit = (hittedObject) => {
        const clonedHittedObject = {...hittedObject};
        this.hittedHistory.push(clonedHittedObject);
        console.log(clonedHittedObject);
        delete this.hitboxes[clonedHittedObject.id];
        this.report.addToReport(this.hittedHistory[this.hittedHistory.length - 1], clonedHittedObject);
    }
    
    createHitBoxes = () => {
        this.hitboxes = {};
        const amountOfSquares = randomInteger(4, 43);
        for (let i = 0; i < amountOfSquares; i++) {
            this.hitboxes[i] = new HitBox(i, HITBOX_TYPES[randomInteger(0, 3)]);
        }
    }

    reset = () => {
        this.hitboxes = {};
        this.hittedHistory = [];
        this.report = new Report();
    }

}