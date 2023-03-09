import React from "react";
import { CanvasV2 } from "../../components/canvas/canvas-v2";
import { Game } from "../../components/game";

export default function Home() {
	return (
		<main>
			<h1>Stupid game</h1>
			<section>
				<Game />
			</section>
		</main>
	);
}
