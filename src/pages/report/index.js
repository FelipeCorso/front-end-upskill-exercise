import React from "react";
import Report from "../../components/report/Report";
import { H1 } from "../../components/typography";
import { Container, ReportsContainer } from "./styled";

export default function ReportPage({ items, hits, avgClickTime, startTime }) {
	return (
		<Container>
			<H1 text="User Reports" />
			<ReportsContainer>
				<Report
					date={startTime}
					items={items}
					avgClickTime={avgClickTime}
					hits={hits}
				/>
			</ReportsContainer>
		</Container>
	);
}
