// Khái niệm lifecycle chỉ tồn tại ở class component

import React, { Component } from "react";
import axios from "axios";

/**
 * MOUNTING: component được khởi tạo
 * - constructor: thường dùng để khởi tạo state, bind các method
 * - render: dùng để return về react element (jsx) là giao diện sẽ được hiển thị
 * - componentDidMount:
 *   + Dùng để setState
 *   + Dùng để xử lý side effect: callAPI, setTimeout, setInterval,...
 *   + Dùng để tương tác với DOM
 */

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // users: dùng để chứa data từ API trả về
      users: [],
    };

    console.log("contructor run");
  }

  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Call API thành công => setState cho users bằng data nhận được từ API
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("componentDidMount run");

    this.fetchUsers();
  }

  render() {
    console.log("render run");

    return (
      <div>
        <h1>Lifecycle</h1>

        {this.state.users.map((user) => {
          return (
            <p key={user.id} className="mb-2">
              Name: {user.name} - Email: {user.email}
            </p>
          );
        })}
      </div>
    );
  }
}
