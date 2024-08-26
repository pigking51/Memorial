import styled from "styled-components";
import { useEffect } from "react";
import { TopDownAction } from "./TopDownAction";
import { useHref } from "react-router-dom";

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(50deg, #bc93f9, #eb92ae);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export function Home() {
  function gotoIndex() {
    window.location.href = `/index`;
  }
  return (
    <>
      <ImageWrap>
        <Background>
          <img src="/images/banner/titleBanner_1.png" alt="Title Image" />
        </Background>
      </ImageWrap>
      {/* <div className="image"></div> */}
      <div>
        <TopDownAction />
      </div>
      <div className="greetings">
        <span> 환영합니다, MEMORIAL입니다 :) </span>
        <div>
          <button onClick={gotoIndex}>👀</button>
        </div>
      </div>
    </>
  );
}
