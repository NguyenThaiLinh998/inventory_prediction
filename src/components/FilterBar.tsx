import { Select, Slider, Row, Col, Card } from "antd";
import styles from "./FilterBar.module.css";

const { Option } = Select;

const FilterBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <label>Financial Y...</label>
          <Select defaultValue="(Multiple)" className={styles.nativeLike}>
            <Option>(Multiple)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Business U...</label>
          <Select defaultValue="Beauty" className={styles.nativeLike}>
            <Option>Beauty</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Sku Product...</label>
          <Select defaultValue="(All)" className={styles.nativeLike}>
            <Option>(All)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Sku</label>
          <Select defaultValue="(Multiple)" className={styles.nativeLike}>
            <Option>(Multiple)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Inflight Lis...</label>
          <Select defaultValue="(All)" className={styles.nativeLike}>
            <Option>(All)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Depleted ...</label>
          <Select defaultValue="(Multiple)" className={styles.nativeLike}>
            <Option>(Multiple)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Depleted %</label>
          <div className={styles.contentFilter}>0,00% - 100%</div>
        </div>

        <div className={styles.filterGroup}>
          <label>Color Mark</label>
          <Select defaultValue="(Multiple)" className={styles.nativeLike}>
            <Option>(Multiple)</Option>
          </Select>
        </div>

        <div className={styles.filterGroup}>
          <label>Remaining...</label>
          <div className={styles.contentFilter}>$1,43 $1,43</div>
        </div>
      </div>

      <div className={styles.metricsRow}>
        <Card className={styles.metricCard}>
          <div className={styles.cardTitle}>Depleted %</div>
          <div className={styles.cardValue}>28.01%</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.cardTitle}>Depleted Value ($)</div>
          <div className={styles.cardValue}>$43,292.61</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.cardTitle}>Remaining %</div>
          <div className={styles.cardValue}>71.99%</div>
        </Card>
        <Card className={styles.metricCard}>
          <div className={styles.cardTitle}>Remaining Value ($)</div>
          <div className={styles.cardValue}>$1,427,636.68</div>
        </Card>

        <div className={styles.colorLegend}>
          <div className={styles.colorBox}>
            <span className={styles.circle + " " + styles.green}></span> 3
          </div>
          <div className={styles.colorBox}>
            <span className={styles.circle + " " + styles.yellow}></span> 4
          </div>
          <div className={styles.colorBox}>
            <span className={styles.circle + " " + styles.red}></span> 16
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
