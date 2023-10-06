import PartyInfo from "./PartyInfo";
import styled from "styled-components";
import borderImg from "../../assets/테두리.png";
import topImg from "../../assets/가랜드.png";
import hatImg from "../../assets/partyhat.png";
import hamsterImg from "../../assets/hamster.webp";
import twinkleImg from "../../assets/twinkle.gif";
import congrateImg from "../../assets/최고심-축하해.png";

const PartyParent = styled.div`
  height: 100vh;
  width: 70%;
  border: 1px solid red;
  position: relative;
  margin: 0 auto;
`;
const BorderImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

const TopImg = styled.img`
  width: 100%;
  height: 140px;
  top: 0;
`;

const HatImg = styled.img`
  width: 65px;
  position: absolute;
  top: 130px;
  left: 38px;
  z-index: 4;
  transform: rotate(-15deg);
`;

const HamsterImg = styled.img`
  width: 85px;
  position: absolute;
  top: 180px;
  left: 30px;
  z-index: 3;
`;

const TwinkleImg = styled.img`
  width: 200px;
  position: absolute;
  top: 190px;
  left: 330px;
  z-index: 1;
  &.second-twinkle {
    width: 80px;
    top: 100px;
  }
`;

const CongrateImg = styled.img`
  width: 200px;
  position: absolute;
  left: 0px;
  top: 530px;
  z-index: 1;
  bottom: 180px;
`;

const BottomImg = styled.img`
  width: 104%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: -10px;
`;

const PartyContainer = styled.div`
  border: 1px solid blue;
  font-size: 18px;
  position: absolute;
  right: 70px;
  bottom: 130px;
`;

export default function PartyDeco() {
  return (
    <PartyParent>
      {/* <BorderImg src={borderImg} /> */}
      <TopImg src={topImg}></TopImg>
      <HatImg src={hatImg}></HatImg>
      <HamsterImg src={hamsterImg}></HamsterImg>
      <TwinkleImg src={twinkleImg}></TwinkleImg>
      <TwinkleImg src={twinkleImg} className="second-twinkle"></TwinkleImg>
      <CongrateImg src={congrateImg}></CongrateImg>
      <PartyInfo />
      <PartyContainer>
        <div>&nbsp;장소: 강남 술집</div>
        <div>
          &emsp;시간: 2023년 10월 13일 <br /> &emsp;&emsp;&emsp;6:00 pm
        </div>
        <div>드레스코드: WHite & black</div>
      </PartyContainer>
    </PartyParent>
  );
}
