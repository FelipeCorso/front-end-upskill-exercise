import { Container } from "./styled";

export const HitBox = ({ element, onHitCallback }) => (
	<Container
		type={element.type}
		left={element.x}
		top={element.y}
		onClick={() => {
			onHitCallback(element);
		}}
	/>
);
