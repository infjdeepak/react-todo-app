import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //functions
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (todo) => {
    const updatetodos = todos.map((stateTodo) => {
      if (stateTodo.id === todo.id) {
        return { ...stateTodo, isCompleted: !stateTodo.isCompleted };
      }
      return { ...stateTodo };
    });
    setTodos(updatetodos);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((stateTodo) => stateTodo.id !== todo.id));
  };

  const filteringtodos = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter((stateTodo) => stateTodo.isCompleted === true)
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((stateTodo) => stateTodo.isCompleted === false)
        );
        break;
      default:
        break;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        completeTodo,
        status,
        setStatus,
        filteredTodos,
        setFilteredTodos,
        filteringtodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
