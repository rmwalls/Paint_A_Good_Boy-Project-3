import React, { Component } from "react";
import "./style.css";

class UserForm extends Component {
  // Setting the component's initial state
  state = {
    fullName: "",
    userName: "",
    password: "",
    email: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //need some validation
    // display entered data in modal to be confirmed or cancelled (go back and edit)
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.fullName}
            name="fullName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="userName"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email Address"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;