import styled from "styled-components";
import "./Login.css";
import { Modal, IDIsNull } from "./Modal";
import axios from "axios";
import { useState, useRef } from "react";

const Logins = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  input:focus {
    outline: none;
  }
`;
const LoginBox = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 180px auto;
  align-items: center;
  gap: 10px;
  padding: 30px;
  background-color: white;
  font-size: 1.3rem;
  border-radius: 15px;
  justify-items: center;
  h1 {
    height: 100px;
    line-height: 100px;
    color: #333;
    font-family: "GyeonggiTitleM";
  }
`;
const PasswordWrap = styled.div`
  width: 566px;
  height: 50px;
  border: 2px solid #00d1fe;
  border-radius: 8px;
  font-size: 15px;
  padding: 0 16px 0 20px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 9fr 1fr;
`;
const Empty = styled.div`
  height: 50px;
  width: 610px;
`;
const BtnWrap = styled.div`
  width: 588px;
  height: 100px;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const LoginBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #00deff;
  color: white;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: none;
  margin-right: 10px;
`;
const SignupBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: white;
  color: #00deff;
  border-style: solid;
  border-width: 3px;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid #00d1fe;
  margin-left: 10px;
`;

export function Login() {
  const urlLogin = "http://localhost:8080/api/authenticate";
  // const urlLogin = "http://localhost:8080/user/login";
  const urlsignUp = "http://localhost:8080/user/signup";
  const urlShow = "http://localhost:8080/user/show";

  let userId = "";
  let password = "";
  let userName = "";
  let userEmail = "";

  const [data, setData] = useState(null);

  const IDRef = useRef();
  const PWRef = useRef();

  function IDInput(e) {
    let InputId = e.target.value;
    console.log(InputId);
  }
  function PWInput(e) {
    let InputPW = e.target.value;
    console.log(InputPW);
  }

  // LoginBtn.addEventListener('click', IDIsNull());
  async function InfoCheck() {
    const loginData = {
      userId: "pepe",
      password: "1",
    };

    console.log(loginData);
    let ModalTitle = "";
    let ModalText = "";

    try {
      if (IDRef.current == null && PWRef.current == null) {
        ModalTitle = "입력오류";
        ModalText = "ID 혹은 PW를 입력하지 않았습니다.";
        Modal(ModalTitle, ModalText);
      } else if (IDRef.current == null) {
        const ModalTitle = "입력오류";
        const ModalText = "ID를 잘못입력했습니다.";
        Modal(ModalTitle, ModalText);
      } else if (PWRef.current == null) {
        const ModalTitle = "입력오류";
        const ModalText = "PW를 잘못입력했습니다.";
        Modal(ModalTitle, ModalText);
      } else {
        const response = await axios.post(urlLogin, {
          loginData,
        });
        if (response.data.resultCode == "SUCCESS") {
          console.log(response.data);
        }
      }
    } catch (error) {
      console.log("아이디 비번체크 오류", error);
      ModalTitle = "입력오류";
      ModalText = "ID 혹은 PW가 일치하지 않습니다..";
      Modal(ModalTitle, ModalText);
      alert("뭔지모르지만 오류뜸");
    }
  }
  return (
    <>
      {/* 로그인 시작 */}
      <Logins>
        <LoginBox>
          <h1>Login</h1>
          <input
            type="text"
            id="userId"
            ref={IDRef}
            placeholder="ID"
            onChange={IDInput}
          />
          <PasswordWrap>
            <input
              type="password"
              id="password"
              ref={PWRef}
              placeholder="비밀번호"
              onChange={PWInput}
            />
            <span className="togBtn revealBtn"></span>
          </PasswordWrap>
          <Empty></Empty>
          <BtnWrap>
            <LoginBtn onClick={InfoCheck}>로그인</LoginBtn>
            <SignupBtn onClick="">회원가입</SignupBtn>
          </BtnWrap>
        </LoginBox>
      </Logins>
      {/* 로그인 끝 */}
      {/* <Modal /> */}
    </>
  );
}
