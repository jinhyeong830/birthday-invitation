import styled from "styled-components";
const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 5px rgba(200, 200, 200, 0.4);
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: whitesmoke;
`;

export default function PresentInfoModal() {
  return (
    <ModalContainer>
      <div>이미지박스</div>
      <h4>선물이름</h4>
      <p>선물설명</p>
      <hr />
      <h3>가격</h3>
      <button>선물하러가기</button>
    </ModalContainer>
  );
}
