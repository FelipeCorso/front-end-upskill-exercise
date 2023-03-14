import { Container } from "./styled";

export const GameControllers = ({ startGame }) => (
	<Container>
		<button onClick={startGame}>Play</button>
	</Container>
);
