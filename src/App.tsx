import React, { useState } from "react";
import shortid from "shortid";

interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const App = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortid.generate(),
      title: "TS 강의듣기",
      contents: "스파르타 코딩클럽 TS 강의 듣기",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "휴가 가기",
      contents: "가족들과 울진으로 여름 휴가 떠나기",
      isDone: true,
    },
  ]);

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
    <>
      <div>
        <header>방학계획표</header>
      </div>
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
      <div>
        <p>할거에요!!</p>
        {todos
          .filter((item) => item.isDone === false)
          .map((item) => {
            return (
              <div key={item.id}>
                <p>제목 : {item.title}</p>
                <p>내용 : {item.contents}</p>
                <button onClick={() => toggleHandler(item.id)}>완료</button>
                <button onClick={() => removeHandler(item.id)}>삭제</button>
              </div>
            );
          })}
      </div>
      <div>
        <p>해결했어요!!</p>
        {todos
          .filter((item) => item.isDone === true)
          .map((item) => {
            return (
              <div key={item.id}>
                <p>제목 : {item.title}</p>
                <p>내용 : {item.contents}</p>
                <button onClick={() => toggleHandler(item.id)}>취소</button>
                <button onClick={() => removeHandler(item.id)}>삭제</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
