import React, { useEffect, useState } from "react";
import axios from "axios";

const TableUser = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUser();
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
        {users.map((user) => (
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

export default TableUser;
