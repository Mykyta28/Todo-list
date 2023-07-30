import React, { useState } from "react";
//import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) =>
//       props.invalid ? "rgb(243, 157, 157)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }
// `;

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [errText, setErrors] = useState("");

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      setIsInputValid(false);
      setErrors("required");
      return;
    }
    props.onAddTask(inputText);
    //document.getElementById('inp').value = "";
    setInputText("");
    console.log("\u{1F600}");
    setErrors("");
};


  return (
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${
            !isInputValid && styles.invalid
          } `}
        >
          <label>Todo list</label>
          <input id="inp" type="text" value={inputText} onChange={taskInputChangeHandler} />
          { inputText ? <span></span> : <span> {errText} </span> } 
          
        </div>
          <Button className="btn" type="submit">Add</Button>
      </form>
  );
};

export default TaskInput;
