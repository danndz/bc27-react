import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserManagement = () => {
  // tạo state users chứa data từ API
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      // Call API
      const { data } = await axios.get(
        "https://629757b414e756fe3b2dc8f0.mockapi.io/api/users"
      );
      // Thành công => gọi hàm setUsers(data) để gán data từ API cho state users
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect sẽ tự động được thực thi sau lần render đầu tiên => dùng để gọi hàm fetchUsers để call API
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-primary">User Management</h1>

      <div className="card mb-5">
        <div className="card-header bg-dark text-white">
          <strong>User Form</strong>
        </div>
        <div className="card-body">
          <UserForm />
        </div>
      </div>

      <UserList users={users} />
    </div>
  );
};

export default UserManagement;
