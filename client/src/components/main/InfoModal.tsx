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
  /* border: 2px solid yellow; */
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 110px;
  transform: rotate(-8.5deg);
`;
const Input = styled.input`
  font-family: "UhBeenamsoyoung";

  outline: none;
  padding: 4px;
  border: none;
  width: 100%;

  &.name {
    background-color: transparent;
    border-bottom: 1px solid black;
  }

  &.date {
    font-size: 13px;
    background-color: #ddd;
    margin: 8px 0px;
    &::before {
      content: attr(data-placeholder);
      width: 100%;
    }
    /* &:focus::before,
    &:valid::before {
      display: none;
    } */
  }

  &.place {
    background-color: transparent;
    border-bottom: 1px solid black;
  }
`;

export default function InfoModal() {
  return (
    <>
      <h3>이름, 생일, 파티 장소및 시간 입력하는 모달 만들기 : 소연</h3>
      <ModalContainer style={{ border: "1px solid blue" }}>
        <InputContainer>
          <Input type="text" placeholder="이름을 써주세요" className="name" />
          <Input
            type="datetime-local"
            className="date"
            data-placeholder="생일파티 시간을 알려주세오"
            required
            aria-required="true"
          />
          <Input
            type="text"
            placeholder="생일파티 장소입니당"
            className="place"
          />
        </InputContainer>

        <RedEnvelope src={envelope} alt="편지봉투" />
      </ModalContainer>
    </>
  );
}
