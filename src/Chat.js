import React, { useState } from "react";
import "./Demo.css";
class Chat extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: "",
      username: [],
      lastmessage: [],
      message: [{ message: "hello", sender: false }],
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
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    console.log("rendering");
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
              <div className="username">{/*/*this.state.name*/}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="left-statusbar">
              <input type={"search"} placeholder={"search contacts"}></input>
            </div>
            <div className="left-inner">{/*this.state.list*/}</div>
          </div>
          <div className="right">
            <div className="message-content">
              <div id="messagebox" className="message">
                {/*this.state.msgcontent*/}
                <MessageList message={this.state.message}></MessageList>
              </div>
              <div className="inputbox">
                <input type={"text"} placeholder={"Enter your message"}></input>
                <button>send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function MessageList(props) {
  const [message, AddMessage] = useState([]);
  const [msgcontent, AppendMessage] = useState([]);
  console.log("Messagelist");
  if (message.length > 0) {
    let i=0;
    message.forEach(element => {
      msgcontent.push(
        <div className="msgcontainer" key={"msgcontainer" + i}>
          <div className="sender sb1" key={"sender" + i}>
            {message[message.length - 1].message}
          </div>
        </div>
      );
      i++;
    });
  }
  return msgcontent;
}
export default Chat;
