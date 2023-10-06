import PresentInfoModal from "../components/present-list/PresentInfoModal";
import PresentList from "../components/present-list/PresentList";
import styled from "styled-components";

const PresentDesc = styled.div`
  font-family: "UhBeenamsoyoung";
  text-align: center;
`;
export default function Present() {
  return (
    <>
      <PresentDesc>
        <h2>Gift for my Birthday-Party</h2>
        <p>
          저의 생일을 축하해주셔서 감사감사😊
          <br />
          아래 선물버튼을 눌러 메시지 보내주세욤😘
        </p>
      </PresentDesc>
      <PresentList />
      <PresentInfoModal />
    </>
  );
}
