import styled from "styled-components";
import BoardBox from "./BoardBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const BoardContainer = styled.div`
  border: 1px solid #000000;
  height: 100vh;
  width: 65%;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  box-shadow: inset 0 -10px 0 rgba(225, 253, 21, 0.5);
  padding-left: 1%;
  padding-right: 1%;
  text-align: center;
  margin-bottom: 15px;
`;
const PageNumber = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  cursor: pointer;
`;

const UttendButton = styled.div`
  background-color: gray;
  padding: 10px;
  text-align: center;
  align-items: center;
  width: 75%;
  margin: 15px auto;
  cursor: pointer;
  color: white;
`;
export default function Boardpage() {
  return (
    <>
      <BoardContainer>
        <Title>Board</Title>
        <BoardBox name={"수정"} date="2023-09-09" message="생일 축하해 ❤️" />
        <BoardBox
          name={"뚜덩"}
          date="2023-10-08"
          message="생일 너무 축하해 ❤️"
        />
        <BoardBox name={"예림"} date="2023-09-19" message="생일 축하해 ❤️" />
        <BoardBox name={"소연"} date="2023-10-08" message="생일 축하해 ❤️" />

        <PageNumber>
          <div>1 &emsp;&emsp;2 &emsp;&emsp;3</div>
          <div>작성하기</div>
        </PageNumber>

        <UttendButton>
          <FontAwesomeIcon icon={faCalendarCheck} />
          &nbsp; 참석여부 체크하기
        </UttendButton>
      </BoardContainer>
    </>
  );
}
