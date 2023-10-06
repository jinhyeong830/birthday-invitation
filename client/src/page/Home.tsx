import Boardpage from "../components/board/BoardPage";
import InfoModal from "../components/main/InfoModal";
import PartyDeco from "../components/main/PartyDeco";
import Navigation from "../components/Navigation";
import { styled } from "styled-components";
import UttendCheck from "../components/uttend/UttendCheck";
import WriteMessege from "../components/write-messege/WriteMessege";

const Inner = styled.div`
  width: 1000px;
  border: 1px dashed yellowgreen;
  margin: 0 auto;
`;
function Home() {
  return (
    <>
      <Inner>
        <Navigation />
        <InfoModal />
        <PartyDeco />
        <Boardpage />
        <UttendCheck />
        <WriteMessege />
      </Inner>
    </>
  );
}

export default Home;
