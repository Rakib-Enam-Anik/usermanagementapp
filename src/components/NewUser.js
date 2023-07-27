import React, {useState, useContext } from "react";
import {UsersContext } from "../context/UsersContext";
import { useUsersContext } from "../hooks/useUsersContext";

const NewUser = () => {
    const [username, setUsername] = useState("");
    
    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const NewUser = {id: new Date().getTime().toString(), username: username};
      handleAddNewUser(newUser);
      setUsername("");
    };

  return (
    <div> <h2>User Registration</h2>
    <form onSubmit={}>
        <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
        <button type="submit">Add User</button>
    </form>
    </div>
  );
};

export default NewUser;
