import { Layout } from "antd";
import SidebarMenu from "./components/SidebarMenu";
import FilterBar from "./components/FilterBar";
import SummaryCards from "./components/SummaryCards";
import InventoryTable from "./components/InventoryTable";
import InventoryChat from "./components/InventoryChat";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import ChartInventory from "./components/ChartInventory";
import useDataChart from "./hooks/useDataChart";

const { Header, Sider, Content } = Layout;

function App() {
  const { dataChart } = useDataChart();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200}>
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", textAlign: "center" }}>
          <h1 style={{ color: "#8B5CF6", margin: 0 }}>
            {dataChart ? "Inventory Prediction" : "Inventory Health Metric"}
          </h1>
        </Header>
        <Content style={{ padding: 24 }}>
          {!!dataChart ? (
            <ChartInventory />
          ) : (
            <>
              <FilterBar />

              <InventoryTable />
            </>
          )}
        </Content>
      </Layout>
      <div className="chat-layout" style={{ width: 380 }}>
        <InventoryChat />
      </div>
    </Layout>
  );
}

export default App;
