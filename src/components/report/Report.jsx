import ReportLine from "../report-line/ReportLine";
import { H2 } from "../typography";
import { Container } from "./styled";

const Report = ({ items, date }) => {
  return (
    <Container>
      <H2 text={`Report ${date}`} />
      <ul>
        {items.map((item, index) => (
          <ReportLine item={item} key={index} />
        ))}
      </ul>
    </Container>
  );
};

export default Report;
