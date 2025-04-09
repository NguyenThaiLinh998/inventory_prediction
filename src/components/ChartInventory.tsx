import { Select, Slider, Row, Col, Card } from "antd";
import styles from "./FilterBar.module.css";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useDataChart from "../hooks/useDataChart";
import Plot from "react-plotly.js";
const { Option } = Select;
const forecastData = {
  product: "Product XYZ",
  forecast_days: 20,
  prediction: [
    { date: "2024-03-31", predicted_sales: 63.82 },
    { date: "2024-04-01", predicted_sales: 61.33 },
    { date: "2024-04-02", predicted_sales: 59.33 },
    // ...
  ],
};

const ChartInventory = () => {
  const { dataChart }: any = useDataChart();
  const dates = dataChart?.prediction.map((item: any) => item.date);
  const predictedValues = dataChart?.prediction.map(
    (item: any) => item.predicted_sales
  );

  return (
    <Plot
      data={[
        {
          x: dates,
          y: predictedValues,
          type: "scatter",
          mode: "lines+markers",
          name: "Prediction",
          line: { color: "blue", dash: "dash" },
        },
      ]}
      layout={{
        title: `Forecast for ${forecastData.product}`,
        autosize: true,
        margin: { l: 40, r: 40, b: 40, t: 40 },
        xaxis: {
          title: "Date",
          tickformat: "%Y-%m-%d", // 👈 this is what formats the date
          type: "date",
        },
        yaxis: {
          title: "Predicted Sales",
        },
      }}
      style={{ width: "100%", height: "100%" }}
      useResizeHandler={true}
    />
  );
};

export default ChartInventory;
