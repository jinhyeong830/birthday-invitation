import { faMagnifyingGlass, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PresentContainer = styled.div`
  width: 200px;
  box-shadow: 0px 0px 10px rgba(200, 200, 200, 0.5);
`;
const PresentImg = styled.img`
  width: 100%;
`;
const ImageBox = styled.div`
  /* border: 2px solid red; */
`;
const IconBox = styled.div`
  width: 50%;
  background-color: #fff;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 1.2rem;
  &.left-box {
    border-right: 1px solid #ddd;
  }
  &:hover {
    cursor: pointer;
  }
`;
interface Props {
  presentSrc: string;
}
export default function PresentItem({ presentSrc }: Props) {
  return (
    <PresentContainer>
      <ImageBox>
        <PresentImg src={presentSrc} alt="에어랩" />
      </ImageBox>
      <div className="d-flex w-100">
        <IconBox className="left-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconBox>
        <IconBox>
          <FontAwesomeIcon icon={faGift} />
        </IconBox>
      </div>
    </PresentContainer>
  );
}
