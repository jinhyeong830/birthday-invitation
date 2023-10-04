import styled from "styled-components";
import PresentItem from "./PresentItem";

const PresentContainer = styled.div`
  display: grid;
  background-color: aqua;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  width: 700px;
  margin: auto;
`;
export default function PresentList() {
  const imgArr = [
    { imgSrc: "/assets/그로밋코스터.webp" },
    { imgSrc: "/assets/다이슨에어랩.webp" },
    { imgSrc: "/assets/루피찹쌀떡.webp" },
    { imgSrc: "/assets/발매트.webp" },
    { imgSrc: "/assets/샤인머스켓.webp" },
    { imgSrc: "/assets/스탠드무드등.webp" },
    { imgSrc: "/assets/인스탁스.webp" },
    { imgSrc: "/assets/조말론향수.webp" },
    { imgSrc: "/assets/키보드.webp" },
    { imgSrc: "/assets/탬버린즈핸드크림.webp" },
    { imgSrc: "/assets/파베초콜릿.webp" },
  ];
  return (
    <PresentContainer>
      {imgArr.map((el) => {
        return <PresentItem presentSrc={el.imgSrc} />;
      })}
    </PresentContainer>
  );
}
