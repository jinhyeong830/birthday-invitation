import img from "../../assets/최고심초대장.jpeg";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  bottom: 100px;
`;

const Img = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "KCCChassam";
  letter-spacing: 12px;
  margin: -15px;
`;
const ToName = styled.div`
  font-family: "UhBeenamsoyoung";
  font-size: 20px;
  position: absolute;
  top: 190px;
  left: 125px;
`;
const FromName = styled.div`
  font-family: "UhBeenamsoyoung";
  color: #383839;
  font-size: 20px;
  position: absolute;
  right: 60px;
  bottom: 23px;
`;

export default function PartyInfo() {
  return (
    <CardContainer>
      <Title>축생일</Title> <br />
      <Img src={img} alt="최고심초대장" />
      <ToName>너</ToName>
      <FromName>. 예림</FromName>
    </CardContainer>
  );
}
