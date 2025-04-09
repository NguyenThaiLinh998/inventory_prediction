import { Card, Row, Col } from "antd";

const metrics = [
  { title: "Depleted %", value: "28.01%" },
  { title: "Depleted Value ($)", value: "$43,292.61" },
  { title: "Remaining %", value: "71.99%" },
  { title: "Remaining Value ($)", value: "$1,427,636.68" },
];

const SummaryCards = () => (
  <Row gutter={16}>
    {metrics.map((m, i) => (
      <Col span={6} key={i}>
        <Card className="custom-card" title={m.title}>
          <h2>{m.value}</h2>
        </Card>
      </Col>
    ))}
  </Row>
);

export default SummaryCards;
