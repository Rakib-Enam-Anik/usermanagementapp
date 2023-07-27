import React from 'react';
import { UserContext } from '../hooks/useUsersContext';

const User = ({ user }) => {
  const {users,setUsers} = useContext(UsersContext)
    const {id, username} = user;

    const handleDelete = (id) => {
        handleDeleteUser(id);
    };

  return <article>
    <h2>{id}</h2>
  <p>{username}</p>
  <button onClick={()=>{handleDelete(id)}}>Delete</button>
  </article>;
  };

export default User;
