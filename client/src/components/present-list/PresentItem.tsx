import { faMagnifyingGlass, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PresentContainer = styled.div``;
const ImageBox = styled.div``;
const IconBox = styled.div``;

export default function PresentItem() {
  return (
    <PresentContainer>
      <ImageBox></ImageBox>
      <IconBox>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </IconBox>
      <IconBox>
        <FontAwesomeIcon icon={faGift} />
      </IconBox>
    </PresentContainer>
  );
}
