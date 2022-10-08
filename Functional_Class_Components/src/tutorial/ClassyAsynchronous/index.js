import React from "react";
import axios from "axios";

class ClassyAsynchronous extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      this.setState({
        posts: data,
      });
    });
  }

  render() {
    // console.log("posts", this.state.posts);
    return (
      <div>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassyAsynchronous;
