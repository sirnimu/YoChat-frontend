import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import "./chatbox.scss";
import Layout from "../components/Layout";

export default function Chatbox(props) {
  const [data, setData] = useState([]);
  const [currentChatMessages, setcurrentChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  let { chatId } = useParams();

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/601c8761c033606410a78d18/latest", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((messages) => {
        setData(messages);
        setcurrentChatMessages(
          messages.filter((msg) => msg.chat_id === chatId)
        );
      });
  }, [chatId, newMessage]);

  let handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (newMessage.length === 0) {
      return;
    }

    let newMessageJSON = {
      message_id: uuid_v4(),
      chat_id: chatId,
      user: "Me",
      body: newMessage,
      created_at: new Date().toJSON(),
    };

    fetch("https://api.jsonbin.io/b/601c8761c033606410a78d18", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...data, newMessageJSON]),
    })
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson.data);
      });

    setNewMessage("");
  };

  return (
    <Layout>
      <div className="Chatbox">
        <div className="messages">
          {currentChatMessages.map((msg) => {
            return (
              <div
                key={msg.message_id}
                className={`message ${
                  msg.user === "Me" ? "current-user" : "other-user"
                }`}
              >
                <div className="message-user">{msg.user}</div>
                <div className="message-body">{msg.body}</div>
              </div>
            );
          })}
        </div>
        <div className="new-message">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newMessage}
              onChange={handleChange}
              className="new-message-body"
            />
            <input type="submit" value="Send" className="send-message-button" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
