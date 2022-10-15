import React from "react";
import "./App.css";
import Demo from "./Demo";
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
          <Demo key={"demo"}></Demo>
        </header>
      </div>
    );
  }
}

export default App;
