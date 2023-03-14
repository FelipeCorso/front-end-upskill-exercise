import Box from "../box/Box";
import { Container } from "./styled";

const ReportLine = ({ item }) => {
	const { color, streak } = item;

	return (
		<Container>
			<Box color={color} />
			<p>Streak: {streak}</p>
		</Container>
	);
};

export default ReportLine;
