import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import { Todo } from "../App";
import mytodolist from "../image/mytodolist.png";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  toggleModal: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Input: React.FC<InputProps> = ({ todos, setTodos, toggleModal }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!title) {
      return alert("제목을 입력해주세요");
    } else if (!contents) {
      return alert("내용을 입력해주세요");
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
      <InputContainer>
        <Img src={mytodolist} />
        <Close onClick={toggleModal}>✕</Close>
        <Form onSubmit={onSubmitHandler}>
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
          <Button type="submit">저장</Button>
        </Form>
      </InputContainer>
    </div>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 15px;

  padding: 30px;

  margin-top: 25px;
  background-color: #ffffff;

  width: 300px;
  height: 450px;
`;

const Close = styled.div`
  position: absolute;

  padding: 20px;

  top: 0;
  left: 0;

  color: #6f6f6f;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 90px;

  margin-bottom: 20px;
`;

const InputBox = styled.input`
  border-radius: 5px;
  border-color: white;

  margin: 15px;

  padding: 7px;
  width: 200px;
  height: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 50px;

  padding: 5px;

  background-color: #f58738;
  /* border-color: white; */
  border: none;
  color: #ffffff;

  margin: 30px 0 70px 0;
  width: 100px;

  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #f67213;
  }
`;
