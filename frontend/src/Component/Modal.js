import styled from "styled-components";
// import { Modal } from "./Modal.css";
import $jQ from "jquery";
import { useState } from "react";

const ModalWrap = styled.div`
  width: 500px;
  height: 250px;
  background-color: #333;
  border: 3px solid #00d1fe;
  border-radius: 8px;
`;
const CancelWrap = styled.div`
  width: 100%;
  height: 25px;
  background-color: #00d1fe;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
  }
  button {
    width: 22.5px;
    height: 22.5px;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: #333;
    border-radius: 4px;
    color: #00d1fe;
    margin-right: 2px;
    cursor: pointer;
    padding: 3px 0 0 4px;
  }
`;

const ModalContents = styled.div`
  width: 100%;
  height: calc(100% - 25px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  span {
    width: calc(100% - 60px);
    font-size: 20px;
    color: #00d1fe;
    padding: 0 30px;
    height: auto;
    text-align: center;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  height: auto;
  a {
    width: 90px;
    height: 30px;
    background-color: #333;
    border: 1px solid #00d1fe;
    color: #00d1fe;
    margin-right: 20px;
    border-radius: 4px;
    p {
      width: calc(100% - 5px);
      height: calc(100% - 5px);
      margin: 2px;
      justify-content: center;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 4px;
      &:active {
        border: 1px dotted #00d1fe;
      }
    }
  }
`;

export function Modal(ModalTitle, ModalText) {
  // const [isActive, setIsActive] = useState("false");
  let isActive = false;
  if (ModalTitle && ModalText) {
    isActive = true;
  }
  return (
    <>
      <div className={`alertPop alert ${isActive ? "active" : ""}`}>
        <ModalWrap>
          <CancelWrap>
            <span>{ModalTitle}</span>
            <button>X</button>
          </CancelWrap>
          <ModalContents>
            <span>{ModalText}</span>
            <BtnWrap>
              <a>
                <p>확인</p>
              </a>
              <a>
                <p>취소</p>
              </a>
            </BtnWrap>
          </ModalContents>
        </ModalWrap>
      </div>
    </>
  );
}
