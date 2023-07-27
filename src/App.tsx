import React, { useState } from "react";
import shortid from "shortid";
import Header from "./components/Header";
import Input from "./components/Input";
import Todolist from "./components/Todolist";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";

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
      title: "휴가 가기",
      contents: "가족들과 울진으로 여름 휴가 떠나기",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "짐 싸기",
      contents: "여름 휴가 짐 싸기!",
      isDone: false,
    },
    {
      id: shortid.generate(),
      title: "출첵하기",
      contents: "금요일 출석하기",
      isDone: false,
    },
      id: shortid.generate(),
      title: "TS 강의듣기",
      contents: "스파르타 코딩클럽 TS 강의 듣기",
      isDone: true,
    },
    {
      id: shortid.generate(),
      title: "TIL 쓰기",
      contents: "매일 매일 TIL 쓰기",
      isDone: true,
    },
    {
      id: shortid.generate(),
      title: "TS 과제",
      contents: "TS LV1 Todolist 만들기",
      isDone: true,
    },
  ]);

  return (
    <div>
      <GlobalStyle />
      <div>
        <Header todos={todos} setTodos={setTodos} />
      </div>
      {/* <div>
        <Input todos={todos} setTodos={setTodos} />
      </div> */}
      <div>
        <Todolist todos={todos} setTodos={setTodos} isDone={false} />
        <Todolist todos={todos} setTodos={setTodos} isDone={true} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  ]);

export default App;
