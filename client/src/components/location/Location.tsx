import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import { useRef } from "react";

export default function BasicMap() {
  useKakaoLoader({
    // appkey: `${process.env.REACT_APP_KAKAOMAP}`,
    appkey: "89938dd4e507f666b2b53ad48461c014",
  });

  // env test
  console.log(process.env.REACT_APP_KAKAOMAP);

  const searchInput = useRef<null | HTMLInputElement>(null);
  console.log(searchInput.current?.value);
  // 인풋창으로 글자 받아서 위도 경도 찾아내는 함수 필요
  return (
    <>
      <input type="text" ref={searchInput} />
      <button>&nbsp;위치 검색&nbsp;</button>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "600px",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
      />
    </>
  );
}
