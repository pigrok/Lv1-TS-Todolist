import React, { useState } from "react";
import shortid from "shortid";
import Header from "./components/Header";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const App = () => {
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

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Input todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <Todolist todos={todos} setTodos={setTodos} isDone={false} />
        <Todolist todos={todos} setTodos={setTodos} isDone={true} />
      </div>
    </>
  );
};

export default App;
