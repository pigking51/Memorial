import styled from "styled-components";
import "./FAQ.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
  border-top: 3px solid #eb92ae;
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
let isHidden = true;
export function FAQ() {
  const [FAQ_Item, setFAQ_Item] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  async function fetchFAQs() {
    try {
      const response = await axios.get("http://localhost:8080/faq", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const FAQData = response.data;

      console.log(FAQData);
      setFAQ_Item(FAQData);
    } catch (error) {
      console.log("FAQ 호출 실패", error);
    }
  }

  function revealHidden(e, index) {
    console.log(e);
    const answers = document.querySelectorAll(".answer");
    console.log(answers[index]);

    if (answers[index].style.display == `none`) {
      answers[index].style.display = `block`;
    } else {
      answers[index].style.display = `none`;
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
                <Question
                  onClick={(e) => {
                    revealHidden(e, index);
                  }}
                >
                  {item.question}
                </Question>
                <div className="answer">{item.answer}</div>
              </div>
            ))}
        </FAQWrap>
      </FAQContainer>
    </>
  );
}
