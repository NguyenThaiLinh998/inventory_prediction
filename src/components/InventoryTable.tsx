import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { InventoryItem } from "../types/inventory";

const getTagColor = (percent: number): string => {
  if (percent < 20) return "green";
  if (percent < 40) return "yellow";
  return "red";
};

const columns: ColumnsType<InventoryItem> = [
  { title: "Business Unit", dataIndex: "businessUnit" },
  { title: "SKU Product Category", dataIndex: "category" },
  { title: "SKU", dataIndex: "sku" },
  { title: "Financial Year", dataIndex: "year" },
  { title: "Value ($)", dataIndex: "value" },
  {
    title: "Depleted %",
    dataIndex: "depleted",
    render: (text: string) => {
      const value = parseFloat(text.replace("%", ""));
      return <Tag className={getTagColor(value)}>{text}</Tag>;
    },
  },
  { title: "Closing Qty", dataIndex: "qty" },
  { title: "Remaining Value ($)", dataIndex: "remainingValue" },
  { title: "Remaining %", dataIndex: "remaining" },
];

const data: InventoryItem[] = [
  {
    key: "1",
    businessUnit: "Beauty",
    category: "Beauty",
    sku: "130194",
    year: "FY2019",
    value: "28,820.64",
    depleted: "9.87%",
    qty: 2658,
    remainingValue: "$263,248.32",
    remaining: "90.13%",
  },
  // More...
];

const InventoryTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    bordered
    size="middle"
  />
);

export default InventoryTable;
