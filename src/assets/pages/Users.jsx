import React, { useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    container: {
      background: "white",
      padding: "30px",
      textAlign: "center",
      fontFamily: "Arial",

    },
    button: {
      padding: "12px 25px",
      background: "blue",
      color: "white",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      border:"none",
      fontSize:"10px"
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      width: "200px",
      background: "white",
      borderRadius: "15px",
      padding: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1>React Axios API Example</h1>

     <button onClick={fetchUsers} style={styles.button}>
        Load Users
      </button>

      <div style={styles.cardContainer} style={styles.card}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;