import React from "react";

const Input = ({name,label}) => {
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    console.log(input,"work");
  };
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={this.props.account.username}
        onChange={this.handleChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
