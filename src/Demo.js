import axios from "axios";
import React from "react";
import "./Demo.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.inputvalue = "";
    this.state = {
      name:"",
      username: [],
      lastmessage: [],
      message: [],
      list: [],
      msgcontent: [],
      inputvalue: "",
      messageUpate: 0,
      messageAppend: 0,
      userUpdate:0,
      userAppend:0,
      bool:true
    };

    this.updateState = this.updateState.bind(this);
    this.clearData = this.clearData.bind(this);
    this.state.list = [];
    this.state.msgcontent = [];
    this.state.message = [
      
    ];
    
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
    if(this.state.userUpdate!=this.state.userAppend){
      for (let i = 0; i < this.state.username.length; i++) {
        console.log("appending users")
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
        this.setState({
          userAppend:this.state.userAppend+1
        })
      }
    }else{
      console.log("both userUpdate and userAppend are same");
    }
  }

  componentDidMount(){
    console.log("mounting")
    axios({
      method: 'post',
      url: '/rest/',
      data: {
        username: 'user2',
        password: 'user2'
      }
    }).then((res)=>{
      console.log(res.data);
      this.setState({
        name:res.data
      })
    });
    axios({
      method:"post",
      url:"/add/",
      data:{
        username: 'user2',
        password: 'user2'
      }
    }).then((res)=>{
      console.log(res.data)
      this.setState({
        username:res.data,
        lastmessage:res.data,
        userUpdate:this.state.userUpdate+1,
        list:[]
      })
    })
  }
  sendToServer(msg){
    
  }
  render() {
    console.log("rendering")
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
