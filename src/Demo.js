import React from "react";
import "./Demo.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: "",
    };
  }
  sendMessage(message) {
    message.push({ sender: false, message: this.state.inputvalue });
    this.setState({
      inputvalue: "",
    });
  }
  setInputValue(e) {
    this.state.inputvalue = e.target.value;
  }
  setUI(){
    let username = [
      "karthikeyan",
      "alen",
      "jiboy",
      "athul",
      "abhijith",
      "zyzz",
      "david",
      "john",
      "thomas",
    ];
    let lastmessage = [
      "hai",
      "hello",
      "bye",
      "da",
      "good morning",
      "good night",
      "tata",
      "good night",
      "good evening",
    ];
    let list = [];
    let msgcontent = [];
    let message = [
      { sender: true, message: "hai" },
      { sender: true, message: "hello" },
      { sender: false, message: "welcome" },
      {
        sender: false,
        message:
          "welcome yhe  ahkgas asas asbajs as asa asad ad adcsds dsdsdjscsdbsdbishdbslhidclshdclhs dclhsdhsdlhcsdlhcsdhsldhljsdhcljsdhljsdhlcjsh ldh sldjch sdljch sldjhc ljshd cljsh cljsdh cljsdh ljsh dcljdhcljdsh cljshdc sdljch sldjchsjdh c",
      },
      {
        sender: false,
        message:
          "Webkit browsers, such as Chrome, Safari and Opera, supports the non-standard ::-webkit-scrollbar pseudo element, which allows us to modify the look of the browser's scrollbar. IE and Edge supports the -ms-overflow-style: property, and Firefox supports the scrollbar-width property, which allows us to hide the scrollbar, but keep functionality.",
      },
    ];
    message.forEach((element) => {
      console.log(element.message)
      if (element.sender) {
        msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + msgcontent.length}
          >
            <div className="sender sb1" key={"sender" + msgcontent.length}>
              {element.message}
            </div>
          </div>
        );
      } else {
        msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + msgcontent.length}
          >
            <div className="receiver sb2" key={"sender" + msgcontent.length}>
              {element.message}
            </div>
          </div>
        );
      }
    });
    for (let i = 0; i < 9; i++) {
      list.push(
        <div className="item" key={"item" + i}>
          <div className="pic" key={"pic" + i}>
            <img
              src={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              alt={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              height={"40"}
              width={"40"}
            ></img>
          </div>
          <div className="main-content">
            <div className="font" key={"font" + i}>
              {username[i]}
            </div>
            <div className="msg" key={"msg" + i}>
              {lastmessage[i]}
            </div>
          </div>
        </div>
      );
    }
    return [list,message,msgcontent,lastmessage,username];
  }
  getUI(list,message,msgcontent,lastmessage,username){
    message.forEach((element) => {
      console.log(element.message)
      if (element.sender) {
        msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + msgcontent.length}
          >
            <div className="sender sb1" key={"sender" + msgcontent.length}>
              {element.message}
            </div>
          </div>
        );
      } else {
        msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + msgcontent.length}
          >
            <div className="receiver sb2" key={"sender" + msgcontent.length}>
              {element.message}
            </div>
          </div>
        );
      }
    });
    for (let i = 0; i < 9; i++) {
      list.push(
        <div className="item" key={"item" + i}>
          <div className="pic" key={"pic" + i}>
            <img
              src={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              alt={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              height={"40"}
              width={"40"}
            ></img>
          </div>
          <div className="main-content">
            <div className="font" key={"font" + i}>
              {username[i]}
            </div>
            <div className="msg" key={"msg" + i}>
              {lastmessage[i]}
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    let ui=this.setUI();
    let list=ui[0]
    let message=ui[1]
    let msgcontent=ui[2]
    let lastmessage=ui[3]
    let username=ui[4]
    return (
      <div className="main">
        {
          console.log("rendering")
        }
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
              <div className="username">Username</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="left-statusbar">
              <input type={"search"} placeholder={"search contacts"}></input>
            </div>
            <div className="left-inner">{list}</div>
          </div>
          <div className="right">
            <div className="message-content">
              <div className="message">{msgcontent}</div>
              <div className="inputbox">
                <input
                  type={"text"}
                  onKeyDown={(eve) => {
                    this.setState({
                      inputvalue: eve.target.value,
                    });
                  }}
                  placeholder={"Enter your message"}
                ></input>
                {}
                <button
                  onClick={(event) => {
                    message.push({
                      sender: false,
                      message: this.state.inputvalue,
                    });
                    this.getUI(list,message,msgcontent,lastmessage,username)
                    this.setState({inputvalue:""})
                  }}
                >
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Demo;
