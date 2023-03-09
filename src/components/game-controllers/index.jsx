import { Container } from "./styled";

export const GameControllers = ({ startGame, finishGame }) => (
	<Container>
		<button onClick={finishGame}>Finish</button>
		<button onClick={startGame}>Play</button>
	</Container>
);
