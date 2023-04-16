import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";


const App = () => {
    
  const [userList, setUserList] = useState([]);
  const addUser = (obj) => {
    setUserList((prevState) => {
      return [...prevState, obj];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUser} />
      <UserLists list={userList} />
    </>
  );
};

export default App;
