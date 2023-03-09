import ReportLine from "../report-line/ReportLine";

const Report = ({ items }) => {
	console.log(items);

	return (
		<ul>
			{items.map((item, index) => (
				<ReportLine item={item} key={index} />
			))}
		</ul>
	);
};

export default Report;
