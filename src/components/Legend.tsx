import { Tag, Space } from "antd";

const Legend = () => (
  <Space direction="vertical" style={{ float: "right", marginRight: 32 }}>
    <Tag className="green">3</Tag>
    <Tag className="yellow">4</Tag>
    <Tag className="red">16</Tag>
  </Space>
);

export default Legend;
