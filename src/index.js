import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class PropButtons extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.text1}</button>
        <br />
        <br />
        <button>{this.props.text2}</button>
        <br />
        <br />
        <button>{this.props.text3}</button>
      </div>
    );
  }
}

//"inject" to DOM
ReactDOM.render(
  <PropButtons text1="Haseeb" text2="Nazia" text3="Aqil" />,
  document.getElementById("buttons-from-prop")
);

///////////////////////////////////////////////////////////////////////////////
class StateButtons extends React.Component {
  state = { clicks1: 0, clicks2: 0 };

  updateButton1() {
    this.setState(prevState => {
      return {
        clicks1: (prevState.clicks1 += 1)
      };
    });
  }

  updateButton2() {
    this.setState(prevState => ({
      clicks2: (prevState.clicks2 += 1)
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.updateButton1.bind(this)}>
          {this.state.clicks1}
        </button>
        <br />
        <br />
        <button onClick={this.updateButton2.bind(this)}>
          {this.state.clicks2}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <StateButtons />,
  document.getElementById("buttons-from-state")
);
