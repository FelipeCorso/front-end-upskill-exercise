import React from "react";

import Report from "../../pages/report";
import { CanvasV2 } from "../canvas/canvas-v2";
import { GameControllers } from "../game-controllers";
import { useGameState } from "./hooks/use-game-state";
import { HITBOX_TYPES } from "./model/hitbox/types";

export const Game = () => {
	const gameState = useGameState();
	return (
		<>
			<CanvasV2
				list={gameState.hitBoxes}
				onHitCallback={gameState.onHitCallback}
			/>
			<GameControllers startGame={gameState.startGame} />
			<Report
				avgClickTime={gameState.report?.avgClickTime}
				hits={gameState.report?.hits}
				startTime={gameState.report?.startTimestamp}
				items={[
					{
						color: "green",
						streak: gameState.report?.streak[HITBOX_TYPES[0]],
					},
					{
						color: "blue",
						streak: gameState.report?.streak[HITBOX_TYPES[0]],
					},
					{
						color: "red",
						streak: gameState.report?.streak[HITBOX_TYPES[0]],
					},
				]}
			/>
		</>
	);
};
