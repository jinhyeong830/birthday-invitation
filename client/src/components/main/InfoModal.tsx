import styled from "styled-components";
import envelope from "../../assets/first.png";
const ModalContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const RedEnvelope = styled.img`
  width: 100%;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: absolute;
  width: 200px;
  border: 2px solid yellow;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 130px;
  transform: rotate(-8.5deg);
`;
const InputName = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  outline: none;
  padding: 4px;
`;
const InputDate = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  background-color: #ddd;
  margin: 8px 0px;
  padding: 4px;
`;
const InputPlace = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  outline: none;
  padding: 4px;
`;

export default function InfoModal() {
  return (
    <>
      <h3>이름, 생일, 파티 장소및 시간 입력하는 모달 만들기 : 소연</h3>
      <ModalContainer style={{ border: "1px solid blue" }}>
        <InputContainer>
          <InputName type="text" placeholder="생일을 입력해주세요" />
          <InputDate type="date" />
          <InputPlace type="text" placeholder="시간 및 장소를 입력해주세요" />
        </InputContainer>

        <RedEnvelope src={envelope} alt="편지봉투" />
      </ModalContainer>
    </>
  );
}
