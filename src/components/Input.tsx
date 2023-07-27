import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { Todo } from "../App";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Input: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!title) {
      return alert("제목을 입력해주세요");
    } else if (!contents) {
      return alert("내을 입력해주세요");
    }

    const newTodo = {
      id: shortid.generate(),
      title,
      contents,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContents(e.target.value);

  return (
    <div>
      {" "}
      <InputContainer>
        <form onSubmit={onSubmitHandler}>
          <InputBox
            type="text"
            id="text"
            placeholder="제목"
            value={title}
            onChange={onChangeTitle}
          />
          <InputBox
            type="contents"
            id="contents"
            placeholder="내용"
            value={contents}
            onChange={onChangeContents}
          />
          <Button type="submit">제출</Button>
        </form>
      </InputContainer>
    </div>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  margin-top: 25px;
  background-color: #f8f856;
`;

const InputBox = styled.input`
  border-radius: 5px;
  border-color: white;

  margin: 3px;

  width: 200px;
`;

const Button = styled.button`
  background-color: #ffffff;
  border-color: #ffffff;
  border-radius: 5px;
  width: 50px;

  color: gray;
`;
