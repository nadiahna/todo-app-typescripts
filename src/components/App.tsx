import React, { FormEvent, useState, ChangeEvent } from "react";
import TodoList from "./TodoList";
import TodoForm from "../components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoValue, setTodoValue] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormatElement>) => {
    event.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);
    setTodoValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  return (
    <div>
      <h1>Welcome to my to-do app</h1>
      <TodoList todos={todos} />
      <TodoForm
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        inputValue={todoValue}
      />
    </div>
  );
};

export default App;
