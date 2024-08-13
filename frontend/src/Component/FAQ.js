import styled from "styled-components";
import "./FAQ.css";
import axios from "axios";
import { useEffect, useState } from "react";

const FAQTitle = styled.div`
  width: calc(100% - 400px);
  margin: 50px auto;
  font-family: "GmarketSansMedium";
  text-align: center;
  height: calc(15% - 100px);
`;
const FAQContainer = styled.div`
  width: calc(100% - 400px);
  border-top: 3px solid #00d1fe;
  height: auto;
  margin: 0 auto;
`;
const FAQWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
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

let isHidden = true;
export function FAQ() {
  const [FAQ_Item, setFAQ_Item] = useState(null);
  const [visible, setVisible] = useState(false);

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

  function revealHidden() {
    if (!isHidden) {
      isHidden = true;
      console.log(isHidden);
    } else {
      isHidden = false;
      console.log(isHidden);
    }
  }
  return (
    <>
      <FAQTitle>FAQ</FAQTitle>
      <FAQContainer>
        <FAQWrap>
          {FAQ_Item &&
            FAQ_Item.map((item, index) => (
              <div key={item.faqId}>
                <Question
                  onClick={() => {
                    setVisible(!visible[index]);
                  }}
                >
                  {item.question}
                </Question>
                {visible[index] && <div className="answer">{item.answer} </div>}
              </div>
            ))}
        </FAQWrap>
      </FAQContainer>
    </>
  );
}
