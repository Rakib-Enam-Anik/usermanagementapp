import React, {useState} from 'react';
import NewUser from "./components/NewUser";
import Users from "./components/Users";
import {UsersContext } from "./context/UsersContext";

const  App = () => {
    const [users, setUsers ] = useState(
        [
            {id: 1, username: 'anisul'},
            {id: 2, username: 'alex'},
        ]
    );

    const handleDeleteUser = (id) =>{
        const filteredUsers = users.filter((user) => user.id !=== id);
        setUsers(filteredUsers);
    }

    const handleAddNewUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

  return (
    <UsersContext.Provider value = {{users,setUsers}}>
    <div>
        <NewUser handleAddNewUser = {handleAddNewUser} />
        <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
    </UsersContext.Provider>
  )
};

export default App;
