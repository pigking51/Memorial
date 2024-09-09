import styled from "styled-components";
import "./FAQ.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { showFAQ } from "./api";

const FAQTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: calc(100% - 400px);
  margin: 50px auto;
  font-family: "GmarketSansMedium";
  text-align: center;
  height: calc(15% - 100px);
  color: #eb92ae;
`;
const FAQContainer = styled.div`
  width: calc(100% - 400px);
  border-top: 1px solid #eb92ae;
  height: auto;
  margin: 0 auto;
`;
const FAQWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  margin: 50px 0;
  ul {
    height: auto;
    border-bottom: 1px solid #00d1fe;
    padding: 0px 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    height: 60px;
    li:first {
      width: 50px;
      text-align: center;
      margin-right: 5px;
    }
    li:nth-child(2) {
      margin-right: 5px;
    }
    li {
      width: 30%;
      height: auto;
      font-size: 20px;
      font-family: "GmarketSansMedium";
      text-align: center;
    }
  }
  ul:first {
    display: none;
  }
  &:hover {
    color: #bf1369;
  }
  tdody {
    tr {
      td:last-child {
        text-align: right;
      }
    }
  }
`;
const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-family: "GmarketSansMedium";
  padding-left: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
const Banner = styled.div`
  margin-top: 100px;
  background: linear-gradient(45deg, #bc93f9, #eb92ae);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  height: 200px;
  width: 100%;
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

  h1 {
    font-size: 50px;
    margin: 0;
  }
  p {
    font-size: 30px;
    margin: 0;
  }
`;

const BackImg = styled.div`
  width: 100%;
  height: 100vh; // 뷰포트 높이에 맞춰 이미지의 높이를 설정
  position: fixed; // 고정된 위치로 설정
  top: 0;
  left: 0;
  z-index: -1; // 다른 요소들보다 뒤에 배치
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; // 배경 이미지를 컨테이너에 맞게 조정
  background-repeat: no-repeat; // 이미지 반복 방지
  background-position: center; // 이미지의 위치를 가운데로 설정
`;

let isHidden = true;
export function FAQ() {
  const [FAQ_Item, setFAQ_Item] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isBlocked, setIsBlocked] = useState(null);

  useEffect(() => {
    fetchFAQs();
    setIsDataLoaded(true);
  }, []);

  async function fetchFAQs() {
    try {
      const response = await showFAQ();
      const FAQData = response.data;

      console.log(FAQData);
      setFAQ_Item(FAQData);
    } catch (error) {
      console.log("FAQ 호출 실패", error);
    }
  }

  function revealHidden(e, index) {
    if (isDataLoaded == true) {
      console.log(e);
      console.log(index);
      const answers = document.querySelectorAll(".answer");
      console.log(answers);
      setIsBlocked(isBlocked != index ? index : null);
      console.log(isBlocked);
    } else {
      console.log("기다려!!");
    }
  }

  return (
    <>
      <Banner>
        <h1>FAQ</h1>
        <p>자주 묻는 질문</p>
      </Banner>
      <FAQTitle>FAQ</FAQTitle>
      <FAQContainer>
        <FAQWrap>
          {FAQ_Item &&
            FAQ_Item.map((item, index) => (
              <div key={item.faqId}>
                <Question onClick={() => revealHidden(item, index)}>
                  {item.question}
                </Question>
                {isBlocked == index && (
                  <div className="answer">{item.answer}</div>
                )}
              </div>
            ))}
        </FAQWrap>
      </FAQContainer>
      <BackImg>
        <img src="/images/etc/webBackground.png" alt="info" />
      </BackImg>
    </>
  );
}
