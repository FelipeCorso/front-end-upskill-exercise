import { HitBox } from "./hit-box";
import { Container } from "./styled-v2";

export const CanvasV2 = ({ list = [], onHitCallback }) => {
	return (
		<Container>
			{list.map((el, index) => (
				<HitBox element={el} key={el + index} onHitCallback={onHitCallback} />
			))}
		</Container>
	);
};
