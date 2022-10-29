import React from "react";
import "./App.css";
import Demo from "./Demo";
import Chat from "./Chat";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: [],
      author: [],
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
         <Chat key={"Chat"}></Chat>
        </header>
      </div>
    );
  }
}

export default App;
