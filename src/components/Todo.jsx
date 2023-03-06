import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useTodo } from "../context/TodoContext";

function Todo({ todo }) {
  const { deleteTodo, completeTodo } = useTodo();
  return (
    <TodoStyle>
      <h4 className={todo.isCompleted ? "completed" : ""}>{todo.text}</h4>
      <div>
        <BsCheckLg
          className={todo.isCompleted ? "checked" : "check"}
          onClick={() => completeTodo(todo)}
        />
        <AiFillDelete className="delete" onClick={() => deleteTodo(todo)} />
      </div>
    </TodoStyle>
  );
}

const TodoStyle = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  min-height: 10rem;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h4.completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
  svg {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    padding: 0.4rem;
    border-radius: 50%;
    color: black;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 1rem 0 1rem 1rem;
  }
  .check {
    background: #b1aeae;
  }
  .checked {
    background: #76d676;
  }
  .delete {
    background: #ec3d3d;
  }
`;
export default Todo;
