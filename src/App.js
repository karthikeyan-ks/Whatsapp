import React from "react";
import "./App.css";
import Demo from "./Demo";
import Chat from "./Chat";
import Login from "./Login";
class App extends React.Component {
  constructor() {
    super();
    const HandleChange=(hascode)=>{
      console.log("changing from App")
      this.setState({
        change:[<Chat hascode={hascode}></Chat>]
      });
    }
    this.state = {
      message: [],
      author: [],
      change:[<Login HandleChange={HandleChange}></Login>]
    };
  }

  componentDidMount() {
    this.setState({
      message: ["hello", "hai"],
      author: ["karthi", "abcd"],
    });
  }

  render() {
    
    return (
      <div className="App">
        <div className="green"></div>
        <header className="App-header">
          {this.state.change}
        </header>
      </div>
    );
  }
}

export default App;
