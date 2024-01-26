import { createContext, useContext } from "react";

const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "hello",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (todo,id) => {},
  toggleCompleted: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => useContext(todoContext);
