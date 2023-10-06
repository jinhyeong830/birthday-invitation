import styled from "styled-components";

const LetterBox = styled.div`
  border: 1px solid #a7a7a7;
  border-radius: 0.5rem;
  padding: 20px;
  box-shadow: 3px 3px 3px rgba(135, 134, 134, 0.5);
  margin: 10px 0;
`;
const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  font-weight: bold;
`;

interface Props {
  name: string;
  date: string;
  message: string;
}
export default function BoardBox({ name, date, message }: Props) {
  return (
    <LetterBox>
      <FirstLine>
        <Name>{name}</Name>
        <div>{date}</div>
      </FirstLine>
      <br />
      <div>{message}</div>
    </LetterBox>
  );
}
