// Tại thời điểm học State, ta chỉ có thế sử dụng ở class component
// Snippet tạo class component: rcc

import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    // this.state là một object đặc biệt của class component
    // Khi giá trị của state thay đổi, component sẽ tự động chạy lại hàm render
    this.state = {
      count: 0,
      message: "",
    };
  }

  increase = () => {
    // Ta không thể thay đổi state theo dạng: this.state.count += 1
    // Khi thay đổi giá trị của state ta cần dùng hàm setState
    this.setState({ count: this.state.count + 1 });
  };

  getMessage = () => {
    const message = prompt("Input your message");
    // setState message bằng giá trị message lấy được từ prompt
    this.setState({ message });
  };

  render() {
    return (
      <div>
        <h1>State</h1>

        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>

        <br />
        <br />

        <p>Message: {this.state.message}</p>
        <button onClick={this.getMessage}>Get Message</button>
      </div>
    );
  }
}
