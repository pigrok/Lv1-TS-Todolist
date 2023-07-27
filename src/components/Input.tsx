import React, { useState } from "react";
import shortid from "shortid";
import { Todo } from "../App";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Input: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent) => {
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
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          type="contents"
          id="contents"
          placeholder="내용"
          value={contents}
          onChange={onChangeContents}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Input;
