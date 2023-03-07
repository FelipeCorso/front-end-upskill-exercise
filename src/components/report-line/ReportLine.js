import Box from "../box/Box";

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
};

export default ReportLine;
