import React, { useEffect, useState } from "react";
import "./Demo.css";
import axios from "axios";
import MessageList from "./MessageList";
import Left from "./Left";

class Chat extends React.Component {
  constructor(prop) {
    super(prop);
    this.inputvalue = "";
    this.state = {
      name: "",
      username: [],
      lastmessage: [],
      message: {},
      list: [],
      msgcontent: [],
      inputvalue: "",
      messageUpate: 0,
      messageAppend: 0,
      userUpdate: 0,
      userAppend: 0,
      bool: true,
    };
  }
  componentDidMount() {
    axios({
      method: "post",
      url: "/rest/",
      data: {
        username: "user2",
        password: "user2",
      },
    }).then((res) => {
      this.setState({
        name: res.data,
      });
    });
    this.setState({
      message: {
        karthikeyan: {
          message: [
            {
              id: 1,
              message: "hai",
              sender: true,
            },
            {
              id: 2,
              message: "hello",
              sender: false,
            },
          ],
        },
        aaa: {
          message: [
            { id: 1, message: "da", sender: true },
            { id: 2, message: "ada", sender: false },
          ],
        },
        bbb: {
          message: [
            { id: 1, message: "da mwone", sender: true },
            { id: 2, message: "ada", sender: false },
          ],
        },
      },
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const handleClick = (num) => {
      this.setState({
        name: num,
      });
    };
    const handleMessage = (message) => {
      console.log("new message", message);
      this.setState({
        message: message,
      });
    };
    return (
      <div className="main">
        <div className="status-bar">
          <div className="left">
            <div className="status-left">
              <div className="status-item">message</div>
              <div className="status-item">status</div>
              <div className="status-item">call</div>
            </div>
          </div>
          <div className="right">
            <div className="status-bar">
              <div className="online">Online</div>
              <div className="username">{this.state.name}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <Left handleClick={handleClick}></Left>
          <MessageList
            handleMessage={handleMessage}
            message={this.state.message}
            name={this.state.name}
          ></MessageList>
        </div>
      </div>
    );
  }
}

export default Chat;
