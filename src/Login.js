import axios from "axios";
import React from "react";
import "./Login.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
      content: [
        <div className="main">
          <div className="sub">
            <h2>Login to whatsapp</h2>
          </div>
          <div className="iteml">
            <label for={"username"}>name</label>
            <input
              type={"text"}
              id="username"
              name="username"
              placeholder="enter your username"
            ></input>
          </div>
          <div className="iteml">
            <label for={"password"}>password</label>
            <input
              type={"password"}
              id="password"
              name="password"
              placeholder="enter your password"
            ></input>
          </div>
          <div className="iteml">
            <button onClick={(event) => this.modeChanger(event)}>
              I don't have account
            </button>
            <button onClick={(event) => this.sendRequest(event)}>Login</button>
          </div>
        </div>,
      ],
    };
  }
  sendRequest(event) {
    var data;
    console.log(this.state.mode);
    if (!this.state.mode) {
      data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        createAccount: true,
      };
    } else {
      data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        createAccount: false,
      };
    }
    axios({
      method: "post",
      url: "/add/",
      data: data,
    }).then((res) => {
      console.log(res.data);
      if (res.data === "user not found") {
        alert(res.data);
      } else {
        let HandleChange = this.props.HandleChange;
        HandleChange(res.data);
      }
    });
    console.log(data);
  }
  modeChanger(event) {
    if (!this.state.mode) {
      this.setState({
        content: [
          <div className="main">
            <div className="sub">
              <h2>Login to whatsapp</h2>
            </div>
            <div className="iteml">
              <label for={"username"}>name</label>
              <input
                type={"text"}
                id="username"
                name="username"
                placeholder="enter your username"
              ></input>
            </div>
            <div className="iteml">
              <label for={"password"}>password</label>
              <input
                type={"password"}
                id="password"
                name="password"
                placeholder="enter your password"
              ></input>
            </div>
            <div className="iteml">
              <button onClick={(event) => this.modeChanger(event)}>
                I don't have account
              </button>
              <button onClick={(event) => this.sendRequest(event)}>
                Login
              </button>
            </div>
          </div>,
        ],
      });
    } else {
      this.setState({
        content: [
          <div className="main">
            <div className="sub">
              <h2>Login to whatsapp</h2>
            </div>
            <div className="iteml">
              <label for={"username"}>name</label>
              <input
                type={"text"}
                id="username"
                name="username"
                placeholder="enter your username"
              ></input>
            </div>
            <div className="iteml">
              <label for={"password"}>password</label>
              <input
                type={"password"}
                id="password"
                name="password"
                placeholder="enter your password"
              ></input>
            </div>
            <div className="iteml">
              <label for={"confirmpassword"}>confirm password</label>
              <input
                type={"password"}
                id="confirmpassword"
                name="confirmpassword"
                placeholder="confirm your password"
              ></input>
            </div>
            <div className="iteml">
              <label for={"email"}>email</label>
              <input
                type={"email"}
                id="email"
                name="email"
                placeholder="enter the email"
              ></input>
            </div>
            <div className="iteml">
              <button onClick={(event) => this.modeChanger(event)}>
                Already have account
              </button>
              <button onClick={(event) => this.sendRequest(event)}>
                Login
              </button>
            </div>
          </div>,
        ],
      });
    }
    let newmode = !this.state.mode;
    this.setState({
      mode: newmode,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log(this.state.content);
    return this.state.content;
  }
}
export default Login;
