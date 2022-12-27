import React, { Component } from "react";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainBox">
          <div className="counter">1 of 15</div>
          <h1>Question</h1>
          <p className="question">Which is the only mammal that can jump?</p>
          <div className="options">
            <button className="mcq btn" id="a">
              Dog
            </button>
            <button className="mcq btn" id="b">
              Elephant
            </button>
            <button className="mcq btn" id="c">
              Goat
            </button>
            <button className="mcq btn" id="d">
              Lion
            </button>
          </div>
          <div className="controllers">
            <button className="btn prev">Previous</button>
            <button className="btn nxt">Next</button>
            <button className="btn quit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
