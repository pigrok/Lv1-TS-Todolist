import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { Todo } from "../App";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Header: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void = (event) => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Head onClick={toggleModal}>BUGGER</Head>
      {showModal && (
        <Modal>
          <Input todos={todos} setTodos={setTodos} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px;

  background-color: #df9711cd;

  font-size: 40px;

  border-radius: 80px 80px 0 0;
  margin-top: 40px;
  cursor: pointer;
`;
const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: #a3a3a356;
  z-index: 9998;
`;
