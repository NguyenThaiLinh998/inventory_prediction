import React, { useRef, useState } from "react";
import styles from "./InventoryChat.module.css";
import {
  SendOutlined,
  AudioOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import axios from "axios";
import useDataChart from "../hooks/useDataChart";
import { message, notification } from "antd";

const InventoryChat = () => {
  const { setDataChart } = useDataChart();
  const inputRef: any = useRef(null);
  const [messages, setMessages] = useState([]);
  const suggestions = [
    "“What is the most depleted SKU in amount?”",
    "“Got any ideas about inventory for a Black Friday campaign?”.",
    "“Give a prediction for Apple Iphone 16 Pro Max in the next quarter”.",
  ];
  const handleKeyDown = async (event: any) => {
    if (event.key !== "Enter") return;
    const value = event.target.value.trim();
    setMessages((prev) => [...prev, { text: value, sender: "user" }] as any);
    inputRef.current.value = null;
    await sendApi(value);
  };
  const sendApi = async (value: string) => {
    try {
      const payload = {
        question: value,
      };
      const data: any = await axios.post(
        "https://sku-prediction.onrender.com/predict-chat",
        payload
      );

      setMessages(
        (prev) => [...prev, { text: data?.data?.answer, sender: "bot" }] as any
      );
      setDataChart(data?.data);
    } catch (error: any) {
      alert(error?.response?.data?.detail);
    }
  };
  const handleOnClick = async () => {
    const value = inputRef.current.value.trim();
    setMessages((prev) => [...prev, { text: value, sender: "user" }] as any);
    inputRef.current.value = null;
    await sendApi(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.arrow}>➜</span>{" "}
        <span className={styles.gradient}>Inventory Chat</span>
      </h1>
      {messages.length > 0 ? (
        <div className={styles.chatWindow}>
          {messages.map((msg: any, idx) => (
            <div
              key={idx}
              className={`${styles.bubble} ${
                msg.sender === "user" ? styles.user : styles.bot
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.capabilities}>
          <span className={styles.sparkle}>✨</span>
          <h3>Capabilities</h3>
          <div className={styles.suggestions}>
            {suggestions.map((text, idx) => (
              <div key={idx} className={styles.suggestion}>
                {text}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.inputBar}>
        <AudioOutlined />
        <PictureOutlined />
        <input
          type="text"
          placeholder="Type message"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <SendOutlined onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default InventoryChat;
