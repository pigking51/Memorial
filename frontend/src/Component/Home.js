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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    margin: 25px 0;
    color: #eb92ae;
    font-size: 40px;
    font-weight: bold;
  }
`;

const TopButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: none;
  border: none;
  cursor: pointer;
  top: 50%;
  right: 5%;

  img {
    width: 50px;
    height: 50px;
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
        <span> 환영합니다, MEMORIAL입니다 :) </span>
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
