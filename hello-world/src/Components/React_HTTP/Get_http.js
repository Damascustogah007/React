import React, { Component } from "react";
import axios from "axios";

class postList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        this.setState({
          Posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Could not fetch data",
        });
      });
  }

  render() {
    const { Posts, errorMessage } = this.state;
    return (
      <div>
        <h2>List of Post</h2>
        {Posts.length
          ? Posts.map((post) => (
              <div key={post.id}>
                {post.id} - {post.email}
              </div>
            ))
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default postList;

/** 
  Steps: 
  1. import axios
  2. create a state property that will store a list of post
  3. use axios to make a get request in the json placeholder API
**/


