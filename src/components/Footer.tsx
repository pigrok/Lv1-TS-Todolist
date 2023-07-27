import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Div></Div>
      <Foot>by. 맹구와 짱구</Foot>
    </div>
  );
};

export default Footer;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 60px;

  background-color: #df9711cd;

  font-size: 40px;

  border-radius: 0 0 80px 80px;

  margin-top: 25px;
`;

const Div = styled.div`
  background-color: #3dcc05;
  padding: 30px 30px;
`;
