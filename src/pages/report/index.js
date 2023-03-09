import React from "react";
import Report from "../../components/report/Report";
import { H1 } from "../../components/typography";
import { Container, ReportsContainer } from "./styled";

export default function ReportPage() {
  const items = [
    { color: "green", hits: 10, streak: 2, avgClickTime: 0.5, },
    { color: "yellow", hits: 25, streak: 5, avgClickTime: 1, },
    { color: "blue", hits: 10, streak: 2, avgClickTime: 0.5, },
    { color: "red", hits: 10, streak: 2, avgClickTime: 0.5, }
  ];
  return (
    <Container>
      <H1 text="User Reports" />

      <ReportsContainer>
        <Report date="3/10" items={items} />
        <Report date="1/10" items={items} />
        <Report date="29/9" items={items} />
      </ReportsContainer>
    </Container>
  );
}
