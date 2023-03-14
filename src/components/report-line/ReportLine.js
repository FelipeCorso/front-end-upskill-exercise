import Box from "../box/Box";
import { Container } from "./styled";

const ReportLine = ({ item }) => {
	const { color, hits, streak, avgClickTime } = item;

	return (
		<li>
			<Box color={color} />
			<p>
				Hits: {hits}, Streak: {streak}, Avg Click Time: {avgClickTime}
			</p>
		</li>
	);
  
  
  
  return (
    <Container>
      <Box color={color} />
      <p>
        Hits: {hits}, Streak: {streak}, Avg Click Time: {avgClickTime}s
      </p>
    </Container>
  );
  
  
  
};

export default ReportLine;
