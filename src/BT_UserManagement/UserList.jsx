import React from "react";
import axios from "axios";

const UserList = ({ users, onSelect, onDeleteSuccess }) => {
  const handleDelete = async (userId) => {
    try {
      // Call API delete user
      await axios.delete(
        `https://629757b414e756fe3b2dc8f0.mockapi.io/api/users/${userId}`
      );
      // Thành công
      onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (userId) => {
    onSelect(userId);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleSelect(user.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
