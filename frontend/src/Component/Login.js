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

const Opps = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.6rem;
    font-weight: bolder;
  }
`;

const Logins = styled.div`
  height: auto;
  width: 100%;
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
  margin: 280px 0px 180px 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  font-size: 1.3rem;
  border-radius: 15px;
  justify-items: center;

  h1 {
    height: 100px;
    line-height: 100px;
    color: #333;
  }
`;
const PasswordWrap = styled.div`
  width: 570px;
  height: 50px;
  border: 2px solid #eb92ae;
  border-radius: 8px;
  font-size: 15px;
  padding: 0 16px 0 20px;
  display: grid;
  grid-template-columns: 9fr 1fr;
  background-color: white;
`;

const BtnWrap = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  /* margin-top: 30px; */
  justify-content: center;
  align-items: center;
`;
const LoginBtn = styled.button`
  width: 200px;
  height: 50px;
  background-color: #eb92ae;
  color: white;
  font-weight: 500;
  text-align: center;
  line-height: 35px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  border: none;
  margin-right: 10px;
`;
const SignupBtn = styled.button`
  width: 200px;
  height: 50px;

  color: #eb92ae;
  border-width: 3px;
  font-weight: 500;
  text-align: center;
  line-height: 35px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  border: 2px solid #eb92ae;
  margin-left: 10px;
  background-color: white;
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

export function Login() {
  const urlLogin = "/api/authenticate";
  const urlsignUp = "/user/signup";
  const urlShow = "/user/show";

  let userId = "";
  let password = "";
  let userName = "";
  let userEmail = "";

  const [data, setData] = useState(null);
  const [nowUserName, setNowUserName] = useState("");
  const [isReveal, setIsReveal] = useState(true);
  const [showPW, setShowPW] = useState("password");
  const [CHborder, setCHborder] = useState(`2px solid #EB92AE`);
  const [CIborder, setCIborder] = useState(`2px solid #EB92AE`);

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
        if (CHborder != `2px solid #EB92AE`) {
          setCHborder(`2px solid #EB92AE`);
        }
        setCIborder(`3px solid #DB365A`);
        return;
      } else if (PWRef.current.value == "") {
        const ModalTitle = "입력오류";
        const ModalText = "PW를 입력하지 않았습니다.";
        Modal(ModalTitle, ModalText);
        window.confirm(`PW를 입력하지 않았습니다.`);
        if (CIborder != `2px solid #EB92AE`) {
          setCIborder(`2px solid #EB92AE`);
        }
        setCHborder(`3px solid #DB365A`);
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
          window.alert(`${yourName}님 환영합니다`);
          window.location.href = `/home`;
        }
      }
    } catch (error) {
      console.log("아이디 비번체크 오류", error);
      ModalTitle = "입력오류";
      ModalText = "ID 혹은 PW가 일치하지 않습니다..";

      Modal(ModalTitle, ModalText);
      window.confirm(`ID 혹은 PW가 일치하지 않습니다.`);
      setCIborder(`3px solid #DB365A`);
      setCHborder(`3px solid #DB365A`);
    }
  }

  function revealToggle() {
    if (isReveal) {
      setIsReveal(false);
      setShowPW("text");
      setCHborder(`3px solid #DB365A`);
      console.log("반응확인");
    } else {
      setIsReveal(true);
      setShowPW("password");
      setCHborder(`3px solid #DB365A`);
      console.log("반응확인22");
    }
  }

  return (
    <>
      {/* 로그인 시작 */}
      {sessionStorage.length != 0 ? (
        <Opps>
          <h2>이런! 잘못된 방식의 접근입니다 😂</h2>
        </Opps>
      ) : (
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

            <BtnWrap>
              <LoginBtn onClick={InfoCheck}>로그인</LoginBtn>
              <SignupBtn onClick={goToSignup}> 회원가입</SignupBtn>
            </BtnWrap>
          </LoginBox>
        </Logins>
      )}
      <BackImg>
        <img src="/images/etc/webBackground.png" alt="info" />
      </BackImg>
    </>
  );
}
