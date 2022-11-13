import React, { useEffect, useState } from "react";
import "./Demo.css";

function MessageList(props) {
  let name = props.name;
  let handleMessage = props.handleMessage;
  const [j, update] = useState(1);
  const [message, AddMessage] = useState([]);
  const [inputvalue, ChangeVal] = useState("");
  const [msgcontent, AppendMessage] = useState([]);
  useEffect(() => {
    console.log("calling message update");
    if (name !== "") {
      let i = j;
      console.log(i);
      if (msgcontent.length === 0) {
        AppendMessage([]);
        message.forEach((element) => {
          if (element.sender) {
            AppendMessage((prev) => [
              ...prev,
              <div
                className="msgcontainer"
                key={"msgcontainer" + name + element.id}
              >
                <div className="sender sb1" key={"sender" + name + element.id}>
                  {element.message}
                  <br></br>
                  <div className="time-div">time</div>
                </div>
              </div>,
            ]);
          } else {
            AppendMessage((prev) => [
              ...prev,
              <div
                className="msgcontainer"
                key={"msgcontainer" + name + element.id}
              >
                <div
                  className="receiver sb2"
                  key={"sender" + name + element.id}
                >
                  {element.message}
                  <br></br>
                  <div className="time-div">time</div>
                </div>
              </div>,
            ]);
          }
          update((prev) => prev + 1);
          i++;
        });
      } else if (msgcontent.length > 0) {
        console.log("iteration");
        let element = message[message.length - 1];
        if (element.message != null) {
          if (element.sender) {
            AppendMessage((prev) => [
              ...prev,
              <div
                className="msgcontainer"
                key={"msgcontainer" + name + element.id}
              >
                <div className="sender sb1" key={"sender" + name + element.id}>
                  {element.name}
                  <br></br>
                  <div className="time-div">time</div>
                </div>
              </div>,
            ]);
          } else {
            AppendMessage((prev) => [
              ...prev,
              <div
                className="msgcontainer"
                key={"msgcontainer" + name + element.id}
              >
                <div
                  className="receiver sb2"
                  key={"sender" + name + element.id}
                >
                  {element.message}
                  <br></br>
                  <div className="time-div">time</div>
                </div>
              </div>,
            ]);
          }
          i++;
          let download = props.message;
          download[name].message.push(element);
          console.log(download);
          handleMessage(download);
        }
      }
    }
    var div = document.getElementById("messagebox");
    if (div !== null) {
      div.scrollTop = div.scrollHeight;
      console.log("srcoll to bottom");
    }
  }, [message]);
  useEffect(() => {
    let download = props.message[name];
    console.log("downloaded", download);
    if (download === undefined) {
      console.log("undefined");
    } else {
      AddMessage(download.message);
    }
    AppendMessage([]);
  }, [name]);
  useEffect(() => {
    var div = document.getElementById("messagebox");
    if (div !== null) {
      div.scrollTop = div.scrollHeight;
      console.log("srcoll to bottom");
    }
  },[msgcontent]);
  return (
    <div className="right">
      <div className="message-content">
        <div id="messagebox" className="message">
          {msgcontent}
        </div>
        <div className="inputbox">
          <input
            value={inputvalue}
            onKeyUp={(eve) => {
              ChangeVal(eve.target.value);
            }}
            onChange={(e) => {
              ChangeVal(e.target.value);
            }}
            type={"text"}
            placeholder={"Enter your message"}
          ></input>
          <button
            onClick={(event) => {
              console.log(j);
              AddMessage((prev) => [
                ...prev,
                { id: j, message: inputvalue, sender: false },
              ]);
              ChangeVal("");
              document.getElementById("aaa1").style.background="#00000"
              update((prev) => prev + 1);
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}
export default MessageList;
