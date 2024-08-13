import styled from "styled-components";
import "./Login.css";
import { Modal, IDIsNull } from "./Modal";
import { useState, useRef } from "react";
import { userLogin, getNowUser, showAllUser } from "./api";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  useNavigate,
} from "react-router-dom";
import { SignUp } from "./SignUp";

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
  const [nowUserName, setNowUserName] = useState("");
  const [isReveal, setIsReveal] = useState(true);
  const [showPW, setShowPW] = useState("password");
  const [CHborder, setCHborder] = useState(`2px solid #00d1fe`);
  const [CIborder, setCIborder] = useState(`2px solid #00d1fe`);

  const IDRef = useRef();
  const PWRef = useRef();

  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/SignUp");
  };

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
      userId: IDRef.current.value,
      password: PWRef.current.value,
    };

    console.log(loginData);
    let ModalTitle = "";
    let ModalText = "";

    try {
      const nowResponse = await showAllUser();
      const NRData = nowResponse.data;
      let i = 0;
      let ID_arr = [];

      for (i = 0; i < NRData.length; i++) {
        ID_arr.push(NRData[i].userId);
      }

      console.log(IDRef.current.value);
      console.log(PWRef.current.value);
      if (IDRef.current.value == "") {
        const ModalTitle = "입력오류";
        const ModalText = "ID를 입력하지 않았습니다.";
        Modal(ModalTitle, ModalText);
        window.confirm(`ID를 입력하지 않았습니다.`);
        if (CHborder != `2px solid #00d1fe`) {
          setCHborder(`2px solid #00d1fe`);
        }
        setCIborder(`4px solid red`);
        return;
      } else if (PWRef.current.value == "") {
        const ModalTitle = "입력오류";
        const ModalText = "PW를 입력하지 않았습니다.";
        Modal(ModalTitle, ModalText);
        window.confirm(`PW를 입력하지 않았습니다.`);
        if (CIborder != `2px solid #00d1fe`) {
          setCIborder(`2px solid #00d1fe`);
        }
        setCHborder(`4px solid red`);
        return;
      } else {
        const response = await userLogin(loginData);
        if (response.data.resultCode == "SUCCESS") {
          sessionStorage.setItem("JWT-token", response.data.data.token);
          console.log(sessionStorage.getItem("JWT-token"));
          // getNowToken(sessionStorage.getItem("JWT-token"));

          // 현재 세션호출
          const currentResponse = await getNowUser();
          const CRData = currentResponse.data;
          // 정보 추출을 위한 유저정보 호출
          const allResponse = await showAllUser();
          const allData = allResponse.data;

          let i = 0;
          let yourName = "";
          for (i = 0; i < allData.length; i++) {
            if (allData[i].userId === CRData.data.userId) {
              console.log(allData[i].realName);
              yourName = allData[i].realName;
              break;
            } else {
              console.log("이름찾기 오류");
            }
          }
          if (window.confirm(`${yourName}님 환영합니다`)) {
            window.location.href = `/home`;
          }
        }
      }
    } catch (error) {
      console.log("아이디 비번체크 오류", error);
      ModalTitle = "입력오류";
      ModalText = "ID 혹은 PW가 일치하지 않습니다..";

      Modal(ModalTitle, ModalText);
      window.confirm(`ID 혹은 PW가 일치하지 않습니다.`);
      setCIborder(`4px solid red`);
      setCHborder(`4px solid red`);
    }
  }

  function revealToggle() {
    if (isReveal) {
      setIsReveal(false);
      setShowPW("text");
      setCHborder(`4px solid red`);
      console.log("반응확인");
    } else {
      setIsReveal(true);
      setShowPW("password");
      setCHborder(`2px solid #00d1fe`);
      console.log("반응확인22");
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
            style={{ border: `${CIborder}` }}
          />
          <PasswordWrap style={{ border: `${CHborder}` }}>
            <input
              type={showPW}
              id="password"
              ref={PWRef}
              placeholder="비밀번호"
              onChange={PWInput}
            />
            <span
              onClick={revealToggle}
              className={`togBtn ${isReveal ? `revealBtn` : `hideBtn`}`}
            ></span>
          </PasswordWrap>
          <Empty></Empty>
          <BtnWrap>
            <LoginBtn onClick={InfoCheck}>로그인</LoginBtn>
            <SignupBtn onClick={goToSignup}> 회원가입</SignupBtn>
          </BtnWrap>
        </LoginBox>
      </Logins>
      {/* 로그인 끝 */}
      {/* <Modal /> */}
    </>
  );
}
