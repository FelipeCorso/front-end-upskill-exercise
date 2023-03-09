import { useCallback, useState } from "react";
import { Game } from "../model/game";

const game = new Game();

export const useGameState = () => {
	const [hitBoxes, setHitBoxes] = useState(Object.values(game.hitboxes));
	const [report, setReport] = useState(game.report);
	const startGame = useCallback(() => {
		game.startGame();
		setHitBoxes(Object.values(game.hitboxes));
	}, [setHitBoxes]);
	const finishGame = useCallback(() => {
		setReport(game.report);
		game.reset();
	}, [setReport, setHitBoxes]);
	return {
		report,
		hitBoxes,
		startGame,
		finishGame,
	};
};
