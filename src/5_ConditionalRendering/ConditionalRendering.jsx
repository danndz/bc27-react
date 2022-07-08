import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor() {
    super();

    this.state = {
      isActive: true,
      isLoggedIn: false,
      unreadMessages: ['A', 'B', 'C'],
    };
  }

  handleToggle = () => {
    this.setState((state) => ({ isActive: !state.isActive }));
  };

  render() {
    // Sử dụng ternary operator để hiển thị giao diện theo điều kiện
    // return (
    //   <div>
    //     <h1>Conditional Rendering</h1>
    //     {this.state.isActive ? <h3>Hello Cybersoft</h3> : <h3>Hello BC27</h3>}
    //     <button onClick={this.handleToggle}>Toggle Active</button>
    //   </div>
    // );

    // Sử dụng if/else để hiện thị giao diện theo điều kiện
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome back!!!</h1>
          {/* Dùng toán tử && để chỉ hiện thị giao diện khi điều kiện là true */}
          {this.state.unreadMessages.length > 0 && (
            <p>
              You have {this.state.unreadMessages.length} unread messages
              <button onClick={() => this.setState({ unreadMessages: [] })}>
                Clear
              </button>
            </p>
          )}
          <button onClick={() => this.setState({ isLoggedIn: false })}>
            Logout
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1>Please Login!!!</h1>
        <button onClick={() => this.setState({ isLoggedIn: true })}>
          Login
        </button>
      </div>
    );
  }
}
