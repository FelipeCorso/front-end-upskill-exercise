import { useCallback, useState } from "react";
import { Game } from "../model/game";

const game = new Game();

export const useGameState = () => {
	const [hitBoxes, setHitBoxes] = useState(
		Object.values(game._hitboxList._list)
	);
	const [report, setReport] = useState(null);
	const startGame = useCallback(() => {
		game.startGame();
		setHitBoxes(Object.values(game._hitboxList._list));
		setReport(null);
	}, [setHitBoxes, setReport]);
	const finishGame = useCallback(() => {
		game.report.compileReport();
		setReport(...game.report);
	}, [setReport, setHitBoxes]);
	const onHitCallback = useCallback(
		(hittedObject) => {
			game.hit(hittedObject);
			const hitboxListArray = Object.values(game._hitboxList._list);
			setHitBoxes(hitboxListArray);
			if (!hitboxListArray.length) {
				finishGame();
			}
		},
		[setHitBoxes]
	);
	return {
		report,
		hitBoxes,
		startGame,
		onHitCallback,
	};
};
