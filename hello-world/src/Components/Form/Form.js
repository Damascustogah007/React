import React, { Component } from "react";
import "../Style/styleSheet";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      comment: "",
      stack: "Angular",
    };
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  commentChangeHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  stackEventHandler = (event) => {
    this.setState({
      stack: event.target.value,
    });
  };

  submitForm = (event) => {
    console.log(`${this.state.username} ${this.state.comment} ${this.state.stack}`);
    event.preventDefault();
  };
  render() {
      const {username ,password,  comment, stack} = this.state;
    return (
      <form onSubmit= {this.submitForm}>
        <div className="High">
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={this.usernameChangeHandler}
          />
        </div>
        <div className="High">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={this.passwordChangeHandler}
          />
        </div>
        <div className="High">
          <label>Comment </label>
          <textarea
            value={comment}
            onChange={this.commentChangeHandler}
          />
        </div>
        <div className="High">
          <label>Stack </label>
          <select value={stack} onChange={this.stackEventHandler}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit" onClick={this.submitForm}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
