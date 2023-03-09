import { HITBOX_TYPES } from "./hitbox";
/*


streak
avg click time

*/

export class Report {
    constructor() {
        this.reset();
    }

    addToReport = (previousHittedObject, hittedObject) => {
        this.hits++;
        if (!!previousHittedObject && previousHittedObject.type === hittedObject.type) {
            this.streak[hittedObject.type] += 1;
        }
        this.avgClickTime += Date.now();
    } 

    compileReport = () => {
        const avgClickTime = this.avgClickTime / this.hits - this.startTimestamp;
        return {
            avgClickTime,
            streak: {...this.streak},
            hits: this.hits
        }
    }
    
    reset = () => {
        this.startTimestamp = Date.now();
        this.hits = 0;
        this.avgClickTime = 0;
        this.streak = {};
        HITBOX_TYPES.forEach(el => {
            this.streak[el] = 0;
        });
    }
}