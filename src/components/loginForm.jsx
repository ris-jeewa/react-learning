import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  // username = React.createRef();
  state = {
    account: { username: "", password: "" },
  };
  // componentDidMount(){
  //   this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault(); // prevents the default behaviour of this event
    // call the server

    // const username = this.username.current.value;
    // console.log("submit");
  };

  
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input value={account.username}/>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
