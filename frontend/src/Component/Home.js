import styled from "styled-components";
import { useEffect } from "react";
import { TopDownAction } from "./TopDownAction";

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export function Home() {
  return (
    <>
      <ImageWrap>
        <img src="/images/banner/titleBanner_1.png" alt="Title Image" />
      </ImageWrap>
      {/* <div className="image"></div> */}
      <div>
        <TopDownAction />
      </div>
      <div className="greetings">
        <span> 환영합니다, MEMORIAL입니다 :) </span>
      </div>
    </>
  );
}
