import Input from "../components/Input";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import { useEffect } from "react";
import { useTodo } from "../context/TodoContext";

function Home() {
  const { todos, setTodos, status, setFilteredTodos, filteringtodos } =
    useTodo();
  //geting todos from local storage
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  // updating todos and load to local storage
  useEffect(() => {
    setFilteredTodos(todos);
    filteringtodos();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);

  return (
    <HomeStyle>
      <Input />
      <TodoList />
    </HomeStyle>
  );
}

const HomeStyle = styled.section`
  background: whitesmoke;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4rem;
  min-height: 80vh;
  width: 90%;
  margin: 2rem auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export default Home;
