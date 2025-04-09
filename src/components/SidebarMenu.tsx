import styles from "./Sidebar.module.css";
import {
  MessageOutlined,
  DeleteOutlined,
  BulbOutlined,
  UserOutlined,
  LogoutOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.newChat}>+ New chat</button>

      <div className={styles.nav}>
        <div className={styles.navItem}>
          <MessageOutlined /> Inventory Status
        </div>
        <div className={styles.navItem}>
          <MessageOutlined /> SKU in stock prediction
        </div>
        <div className={styles.navItem}>
          <MessageOutlined /> Black Friday event stock
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <DeleteOutlined /> Clear conversations
        </div>
        <div className={styles.footerItem}>
          <BulbOutlined /> Light mode
        </div>
        <div className={styles.footerItem}>
          <UserOutlined /> My account
        </div>
        <div className={styles.footerItem}>
          <QuestionOutlined /> Updates & FAQ
        </div>
        <div className={styles.footerItem}>
          <LogoutOutlined /> Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
