import React, { Component } from "react";
import axios from "axios";

class Post_http extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Id </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
              ref={this.inputRef}
            />
          </div>

          <div>
            <label>title </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label>body </label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post_http;
