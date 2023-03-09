import Report from "../../pages/report";
import { CanvasV2 } from "../canvas/canvas-v2";
import { GameControllers } from "../game-controllers";
import { useGameState } from "./hooks/use-game-state";

export const Game = () => {
	const gameState = useGameState();
	return (
		<>
			<CanvasV2
				list={gameState}
				onHitCallback={(type) => console.log(type)}
			/>
			<GameControllers />
			<Report
				items={[
					{
						color: "red",
						hits: 12,
						streak: 10,
						avgClickTime: "0.5s",
					},
				]}
			/>
		</>
	);
};