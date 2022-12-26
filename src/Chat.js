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
      intervalid: "",
    };
  }

  checkNewMessage() {
    // console.log("checking new Message");
  }

  componentDidMount() {
    var id = setInterval(this.checkNewMessage.bind(this), 1000);
    this.intervalid = id;
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
              file_attach: true,
              file_link:
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
              message: "hai",
              sender: true,
            },
            {
              id: 2,
              file_attach: false,
              file_link: null,
              message: "hello",
              sender: false,
            },
            {
              id: 3,
              file_attach: true,
              file_link: "https://wallpaper.dog/large/20473461.jpg",
              message: "hai",
              sender: false,
            },
          ],
        },
        aaa: {
          message: [
            {
              id: 1,
              file_attach: false,
              file_link: null,
              message: "da",
              sender: true,
            },
            {
              id: 2,
              file_attach: false,
              file_link: null,
              message: "ada",
              sender: false,
            },
          ],
        },
        bbb: {
          message: [
            {
              id: 1,
              file_attach: false,
              file_link: null,
              message: "da mwone",
              sender: true,
            },
            {
              id: 2,
              file_attach: false,
              file_link: null,
              message: "ada",
              sender: false,
            },
          ],
        },
      },
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.intervalid);
  }
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
            hascode={this.props.hascode}
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
