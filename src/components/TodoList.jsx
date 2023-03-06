import styled from "styled-components";
import Todo from "./Todo";
import { useTodo } from "../context/TodoContext";

function TodoList() {
  const { filteredTodos } = useTodo();
  return (
    <TodoListStyle>
      {filteredTodos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </TodoListStyle>
  );
}
const TodoListStyle = styled.div`
  align-self: stretch;
  margin: 2rem 0;
  display: grid;
  text-align: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
export default TodoList;
