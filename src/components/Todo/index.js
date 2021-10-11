import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { TodoList } from "../TodoList";
import { data } from "../../data/data";
import {
  InputContainer,
  Input,
  Button,
  Title,
  Textarea,
  Reverse,
} from "./styles";

export const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    editable: false,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title && newTodo.description) {
      setTodos([...todos, { id: uuid4(), ...newTodo }]);
      setNewTodo({ title: "", description: "", editable: false });
    }
  };

  const removeTodo = (id) => {
    const remainItem = todos.filter((todo) => todo.id !== id);
    setTodos(remainItem);
  };

  const updateTodo = (id, updatedItem) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedItem : todo)));
  };

  const handleEditMode = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, editable: true } : todo))
    );
  };

  const onHandleCancel = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editable: false } : todo
      )
    );
  };

  return (
    <>
      <Title>Todo App</Title>
      <InputContainer>
        <Input
          value={newTodo.title}
          id="title"
          name="title"
          placeholder="Title"
          onChange={onHandleChange}
        />
        <Textarea
          value={newTodo.description}
          id="description"
          name="description"
          placeholder="Description"
          onChange={onHandleChange}
        />
        <Button onClick={onHandleSubmit}>add</Button>
      </InputContainer>

      <Reverse>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            item={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            handleEditMode={handleEditMode}
            onHandleCancel={onHandleCancel}
          />
        ))}
      </Reverse>
    </>
  );
};
