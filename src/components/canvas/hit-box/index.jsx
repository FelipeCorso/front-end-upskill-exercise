import { Container } from "./styled";

export const HitBox = ({ type, left, top, onHitCallback }) => (
	<Container
		type={type}
		left={left}
		top={top}
		onClick={() => {
			onHitCallback(type);
		}}
	/>
);
