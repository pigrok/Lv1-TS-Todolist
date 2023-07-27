import React from "react";
import { Todo } from "../App";

interface TodolistProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
}

const Todolist: React.FC<TodolistProps> = ({ todos, setTodos, isDone }) => {
  const removeHandler = (id: string) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  const toggleHandler = (id: string) => {
    const toggleTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(toggleTodo);
  };

  return (
    <div>
      {isDone ? "해결했어요!!" : "할거에요!!"}
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <p>제목 : {todo.title}</p>
              <p>내용 : {todo.contents}</p>

              <button onClick={() => toggleHandler(todo.id)}>
                {isDone ? "취소" : "완료"}
              </button>

              <button onClick={() => removeHandler(todo.id)}>삭제</button>
            </div>
          );
        })}
    </div>
  );
};

export default Todolist;
