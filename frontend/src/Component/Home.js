import styled from "styled-components";
import { useEffect, useState } from "react";
import { TopDownAction } from "./TopDownAction";
import { useHref } from "react-router-dom";
import { Footer } from "./Footer";

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
  margin-top: 100px;
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

const Greetings = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px 0;

  span {
    color: #333;
    font-size: 50px;
    font-weight: 400;
  }
  strong {
    text-decoration: none;
    box-shadow: inset 0 -10px 0 hsla(53, 90%, 83%, 0.93);
    padding-bottom: 2px;
  }
`;

const TopButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  background-color: none;
  border: none;
  cursor: pointer;
  top: 85%;
  right: 5%;

  img {
    width: 90;
    height: 90px;
  }
`;

const Unicon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const GameScreen = styled.div`
  margin: 50px 0;
`;

export function Home() {
  function gotoIndex() {
    window.location.href = `/index`;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function allowScroll() {
    document.body.classList.remove("no-scroll");
  }
  return (
    <>
      <ImageWrap>
        <Background>
          <img src="/images/banner/titleBanner_1.png" alt="Title Image" />
        </Background>
      </ImageWrap>
      <Greetings>
        <span>
          {" "}
          환영합니다, <strong>MEMORIAL</strong>입니다 :){" "}
        </span>
        <TopButton
          onClick={() => {
            scrollToTop(true);
            allowScroll();
          }}
        >
          <img src="/images/icon/TopButton.png"></img>
        </TopButton>
      </Greetings>
      {/* <div className="image"></div> */}
      <GameScreen>
        <TopDownAction />
      </GameScreen>

      <Unicon>
        <button onClick={gotoIndex}>🦄</button>
      </Unicon>
    </>
  );
}
