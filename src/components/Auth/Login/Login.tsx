import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
}

const Login: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className=" mt-5 pt-5">
        {users.map((user) => (
          <div key={user.id}>
            {user.id}: {user.username}
          </div>
        ))}
      </div>
    </>
  );
};

export default Login;
