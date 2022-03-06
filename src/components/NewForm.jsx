import React, { Component } from "react";

export class NewForm extends Component {
  //step 2 create constructor to house var
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }
  //step3 create a class prop to handle change
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleComment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments}`);
    //stops form from refreshing
    event.preventDefault()
  };

  //step 1 create forms
  //for submit btn we will have to link it to form onSubmit
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComment}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewForm;
