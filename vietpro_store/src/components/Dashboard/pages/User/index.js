import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Layout/Header";
import { getUsers } from "../../services/Api";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data));
  }, []);
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Fullname</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default User;
