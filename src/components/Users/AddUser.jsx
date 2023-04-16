import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enterName, setEntereName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setEntereName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submittHandler = (e) => {
    e.preventDefault();

    if (enterName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        tittle: "Invalid input",
        message: "Please enter valid name and age{(non empty fields)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "age should be greater than 1",
      });
      return;
    }
    const data = { name: enterName, age: enteredAge };
    props.onAddUser(data);
    setEntereName("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submittHandler}>
          <label htmlFor="user">Username</label>
          <input
            type="text"
            id="user"
            value={enterName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
