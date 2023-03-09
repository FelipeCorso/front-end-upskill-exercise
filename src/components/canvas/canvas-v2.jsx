import { HitBox } from "./hit-box";
import { Container } from "./styled-v2";

export const CanvasV2 = ({ list = [], onHitCallback }) => {
	return (
		<Container>
			{list.map((el, index) => (
				<HitBox
					left={Math.floor(Math.random() * 500)}
					top={Math.floor(Math.random() * 500)}
					type={el.type}
					key={el + index}
					onHitCallback={onHitCallback}
				/>
			))}
		</Container>
	);
};
