import React from "react";
import { CanvasV2 } from "../../components/canvas/canvas-v2";
import { GameControllers } from "../../components/game-controllers";
import Report from "../../components/report/Report";

export default function Home() {
	return (
		<main>
			<h1>Stupid game</h1>
			<section>
				<CanvasV2
					list={["l1", "l2", "l1", "l3", "l2"]}
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
			</section>
		</main>
	);
}
