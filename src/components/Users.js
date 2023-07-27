import React, {useContext} from 'react';
import {UsersContext} from "../context/UsersContext";
import User from "./User";

const Users = ({ users, handleDeleteUser}) => {
  const {users,setUsers} = useContext(UsersContext)
  return (
  <section className="users">
    {users.map((user) => (<User key={user.id} user={user}
    handleDeleteUser={handleDeleteUser} />))}
  </section>
  );
};

export default Users;
