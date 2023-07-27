import React from "react";
import styled from "styled-components";
import { Todo } from "../App";

interface TodolistProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
}

const Todolist: React.FC<TodolistProps> = ({ todos, setTodos, isDone }) => {
  const removeHandler = (id: string): void => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  const toggleHandler = (id: string): void => {
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
    <TodoContainer>
      <div>
        {isDone ? (
          <DoneTitle>"해결했어요!!"</DoneTitle>
        ) : (
          <TodoTitle> "할거에요!!"</TodoTitle>
        )}
      </div>
      <TodoWrapper>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => {
            return (
              <TodoBox key={todo.id}>
                <Labeltitle>제목 : {todo.title}</Labeltitle>
                <LabelContents>{todo.contents}</LabelContents>
                <ButtonContaniner>
                  <Button onClick={() => toggleHandler(todo.id)}>
                    {isDone ? "취소" : "완료"}
                  </Button>
                  <Button onClick={() => removeHandler(todo.id)}>삭제</Button>
                </ButtonContaniner>
              </TodoBox>
            );
          })}
      </TodoWrapper>
    </TodoContainer>
  );
};

export default Todolist;

const TodoContainer = styled.div`
  margin-bottom: 25px;
`;

const TodoTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eaf42d;
  padding: 1.5rem 1rem;
  font-size: 1.5rem; /* 예: 루트 폰트 크기가 16px라면, 1.5rem은 24px입니다. */
`;

const DoneTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f64030;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
`;
const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const TodoBox = styled.div`
  border: 1px solid black;
  border-radius: 70px;
  width: 360px;
  height: 200px;

  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  background-color: #8e3a27;
`;

const Labeltitle = styled.div`
  width: 250px;
  overflow-wrap: break-word;

  padding: 20px;
`;

const LabelContents = styled.div`
  width: 250px;
  overflow-wrap: break-word;
  padding: 20px;
`;

const ButtonContaniner = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: black;

  margin: 0 10px 0 10px;
  padding: 5px;

  border: 2px solid black;
  /* border-color: #472b11; */
  border-radius: 15px;
`;
