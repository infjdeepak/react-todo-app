import { useState } from "react";
import styled from "styled-components";
import { useTodo } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

function Input() {
  const { setStatus, addTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");

  //handler
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      text: inputValue,
      isCompleted: false,
    });
    setInputValue("");
  };

  return (
    <InputContainerstyle>
      <FormStyle>
        <input
          type="text"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Enter your todo"
        />
        <button onClick={addTodoHandler}>Add</button>
      </FormStyle>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </InputContainerstyle>
  );
}

const InputContainerstyle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  select {
    padding: 0.5rem;
    border-radius: 1rem;
    border: none;
  }
`;
const FormStyle = styled.form`
  display: flex;
  gap: 1rem;
  input,
  button {
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    border: none;
  }
  input {
    width: 100%;
    outline: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  button {
    background: #c473a1;
  }
`;
export default Input;
