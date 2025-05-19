import React, { useEffect, useState } from "react";

export default function User() {
  const [userslist, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsersData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();

      if (result?.users) {
        setUsers(result?.users);
        setLoading(false);
      } else {
        setUsers([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
//   useEffect(() => {
//     fetchUsersData();
//   }, []);

  
  if (loading) {
      return <h2>Users Data is fetching , Please a moment! </h2>;
    }
    console.log(userslist);
  return (
    <div>
      <h2>Users List</h2>
      <button onClick={fetchUsersData} >fetch users</button>
      <ul>
        {userslist && userslist.length > 0 ? (
          userslist.map((user) => (
            <li key={user.id}>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </li>
          ))
        ) : (
          <h2>No users found here! Please try again later</h2>
        )}
      </ul>
    </div>
  );
}
