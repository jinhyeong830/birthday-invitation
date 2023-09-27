import styled from "styled-components";
import envelope from "../../assets/first.png";
import { useRef, useState } from "react";
const ModalContainer = styled.div`
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
    &:focus::before,
    &:valid::before {
      display: none;
    }
  }

  &.place {
    background-color: transparent;
    border-bottom: 1px solid black;
  }
`;

export default function InfoModal() {
  const [modal, setModal] = useState<boolean>(true);

  const input = useRef<null | HTMLInputElement>(null);
  const inputDate = useRef<null | HTMLInputElement>(null);
  const inputPlace = useRef<null | HTMLInputElement>(null);

  const handleClick = () => {
    if (
      input.current?.value !== "" &&
      inputPlace.current?.value !== "" &&
      inputDate.current?.value !== ""
    ) {
      setModal(false);
      console.log(inputDate.current?.value);
    }
  };

  return (
    <>
      {modal && (
        <ModalContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="이름을 써주세요"
              className="name"
              ref={input}
            />
            <Input
              type="datetime-local"
              className="date"
              data-placeholder="생일파티 시간을 알려주세오"
              required
              aria-required="true"
              ref={inputDate}
            />
            <Input
              type="text"
              placeholder="생일파티 장소입니당"
              className="place"
              ref={inputPlace}
            />
          </InputContainer>

          <RedEnvelope src={envelope} alt="편지봉투" onClick={handleClick} />
        </ModalContainer>
      )}
    </>
  );
}
