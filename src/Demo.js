import React from "react";
import "./Demo.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.inputvalue = "";
    this.state = {
      username: [],
      lastmessage: [],
      message: [],
      list: [],
      msgcontent: [],
      inputvalue: "",
      messageUpate: 0,
      messageAppend: 0,
      bool:true
    };

    this.updateState = this.updateState.bind(this);
    this.clearData = this.clearData.bind(this);

    this.state.username = [
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
    this.state.lastmessage = [
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
    this.state.list = [];
    this.state.msgcontent = [];
    this.state.message = [
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
    this.state.message.forEach((element) => {
      if (element.sender) {
        this.state.msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + this.state.msgcontent.length}
          >
            <div
              className="sender sb1"
              key={"sender" + this.state.msgcontent.length}
            >
              {element.message}
            </div>
          </div>
        );
      } else {
        this.state.msgcontent.push(
          <div
            className="msgcontainer"
            key={"msgcontainer" + this.state.msgcontent.length}
          >
            <div
              className="receiver sb2"
              key={"sender" + this.state.msgcontent.length}
            >
              {element.message}
            </div>
          </div>
        );
      }
    });
    for (let i = 0; i < 9; i++) {
      this.state.list.push(
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
              {this.state.username[i]}
            </div>
            <div className="msg" key={"msg" + i}>
              {this.state.lastmessage[i]}
            </div>
          </div>
        </div>
      );
    }
  }

  updateState(e) {
    this.setState({
      inputvalue: e.target.value,
    });
  }

  clearData() {
    this.setState({
      inputvalue: "",
    });
  }

  AppendMessage() {
    let msgcontent = this.state.msgcontent;
    this.setState({
      msgcontent: [],
    });
    if (this.state.message[this.state.message.length - 1].sender) {
      msgcontent.push(
        <div className="msgcontainer" key={"msgcontainer" + msgcontent.length}>
          <div className="sender sb1" key={"sender" + msgcontent.length}>
            {this.state.message[this.state.message.length - 1].message}
          </div>
        </div>
      );
    } else {
      msgcontent.push(
        <div className="msgcontainer" key={"msgcontainer" + msgcontent.length}>
          <div className="receiver sb2" key={"sender" + msgcontent.length}>
            {this.state.message[this.state.message.length - 1].message}
          </div>
        </div>
      );
    }
    this.setState({
      msgcontent: msgcontent,
      messageAppend: this.state.messageAppend + 1,
    });
  }

  
  scrollToBottom() {
    var div = document.getElementById("messagebox");
    if (div !== null) div.scrollTop = div.scrollHeight;
  }

  componentDidUpdate() {
    if (this.state.messageUpate !== this.state.messageAppend) {
      this.AppendMessage();
    }else {
      if(!this.state.bool){
        this.scrollToBottom();
        this.setState({
          bool:true
        })
      }  
    }
  }

  render() {
    
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
              <div className="username">Username</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="left-statusbar">
              <input type={"search"} placeholder={"search contacts"}></input>
            </div>
            <div className="left-inner">{this.state.list}</div>
          </div>
          <div className="right">
            <div className="message-content">
              <div id="messagebox" className="message">
                {this.state.msgcontent}
              </div>
              <div className="inputbox">
                <input
                  type={"text"}
                  value={this.state.inputvalue}
                  onKeyUp={(eve) => {
                    this.inputvalue = eve.target.value;
                  }}
                  onChange={this.updateState}
                  placeholder={"Enter your message"}
                ></input>

                <button
                  onClick={(event) => {
                    this.clearData();
                    console.log(this.inputvalue);
                    this.setState({
                      message: this.state.message.concat({
                        sender: false,
                        message: this.inputvalue + " ",
                      }),
                      messageUpate: this.state.messageUpate + 1,
                      bool:false
                    });
                    console.log("messages ", this.state.message.length);
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
