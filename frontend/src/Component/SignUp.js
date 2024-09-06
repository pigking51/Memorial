import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { showAllUser, userRegister } from "./api";

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  display: block;
  height: auto;
  margin-bottom: 100px;

  input:focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 100px;
  text-align: center;
  line-height: 300px;
  font-size: 50px;
  font-weight: bold;
  font-family: "GyeonggiTitleM";
`;
const Write = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NicknameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 848px;
  button {
    transition: 0.3s;
    width: 160px;
    height: 50px;
    border-radius: 30px;
    background-color: #eb92ae;
    border: none;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-right: 24px;
  }
  button:hover {
    border: #eb92ae 2px solid;
    background-color: #fff;
    color: #eb92ae;
    cursor: pointer;
  }
`;
const Nickname = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-left: 24px;
`;
const Nick_check = styled.button``;

const Password = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const Password_check = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const Birth = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const EmailWrap = styled.div`
  display: flex;
  height: 50px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  width: 848px;
  button {
    transition: 0.3s;
    width: 160px;
    height: 50px;
    border-radius: 30px;
    background-color: #eb92ae;
    border: none;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    margin-right: 24px;
  }
  button:hover {
    border: #eb92ae 2px solid;
    background-color: #fff;
    color: #eb92ae;
    cursor: pointer;
  }
`;
const Email = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-left: 24px;
`;
const Email_check = styled.button``;
const Name = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eb92ae;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const Gender = styled.div`
  width: 800px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Man = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    box-shadow: none;
  }
  label {
    font-size: 18px;
    line-height: 100px;
    display: inline-block;
    width: 100px;
    font-weight: bold;
    text-align: center;
  }
`;
const Woman = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    box-shadow: none;
  }
  label {
    font-size: 18px;
    line-height: 100px;
    display: inline-block;
    width: 100px;
    font-weight: bold;
    text-align: center;
  }
`;
const Btnwrap = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
  justify-content: center;
  .boxBtn {
    transition: 0.3s;
    width: 225px;
    height: 50px;
    border-radius: 30px;
    background-color: #eb92ae;
    border: none;
    margin-left: 50px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  .boxBtn:hover {
    background-color: #fff;
    border: 2px solid #eb92ae;
    color: #eb92ae;
  }
`;

export function SignUp() {
  const navigate = useNavigate();

  let userId = "";
  let password = "";
  let password_check = "";
  let birth = "";
  let email = "";
  let name = "";
  let gender = "MALE";

  const [IDborder, setIDborder] = useState(`2px solid #EB92AE`);
  const [PWborder, setPWborder] = useState(`2px solid #EB92AE`);
  const [Birthborder, setBirthborder] = useState(`2px solid #EB92AE`);
  const [Emailborder, setEmailborder] = useState(`2px solid #EB92AE`);
  const [Nameborder, setNameborder] = useState(`2px solid #EB92AE`);
  const [PWCborder, setPWCborder] = useState(`2px solid #EB92AE`);

  const IDRef = useRef();
  const PWRef = useRef();
  const PWCRef = useRef();
  const BirthRef = useRef();
  const EmailRef = useRef();
  const NameRef = useRef();
  const GenderRef = useRef();

  function IDInput(e) {
    userId = e.target.value;
    console.log(userId);
  }
  function PWInput(e) {
    password = e.target.value;
    console.log(password);
  }
  function PWCInput(e) {
    password_check = e.target.value;
    console.log(password_check);
  }
  function BirthInput(e) {
    birth = e.target.value;
    console.log(birth);
  }
  function EmailInput(e) {
    email = e.target.value;
    console.log(email);
  }
  function NameInput(e) {
    name = e.target.value;
    console.log(name);
  }
  function GenderInput(e) {
    gender = e.target.value;
    console.log(gender);
  }

  async function userIdCheck() {
    try {
      const IdResponse = await showAllUser();
      const IdR_data = IdResponse.data;

      let IdR_arr = [];
      let i = 0;
      for (i = 0; i < IdR_data.length; i++) {
        IdR_arr.push(IdR_data[i].userId);
      }

      console.log(IdR_arr.indexOf(IDRef.current.value));
      if (IdR_arr.indexOf(IDRef.current.value) == -1) {
        if (!window.confirm(`사용 가능한 ID입니다 사용하시겠습니까?`)) {
          IDRef.current.value = "";
        }
      } else {
        window.confirm(`중복된 ID입니다 다른 ID로 입력해주세요!`);
      }
    } catch (error) {
      console.log("아이디 중복확인 오류", error);
    }
  }
  async function userEmailCheck() {
    try {
      const EmailResponse = await showAllUser();
      const Email_data = EmailResponse.data;

      let Email_arr = [];
      let i = 0;
      for (i = 0; i < Email_data.length; i++) {
        Email_arr.push(Email_data[i].email);
      }

      if (Email_arr.indexOf(EmailRef.current.value) == -1) {
        if (!window.confirm(`사용 가능한 Email입니다 사용하시겠습니까?`)) {
          EmailRef.current.value = "";
        }
      } else {
        window.confirm(`중복된 Email입니다 다른 Email로 입력해주세요!`);
      }
    } catch (error) {
      console.log("Email 중복확인 오류", error);
    }
  }

  async function userSignUp() {
    if (IDRef.current.value == "") {
      window.confirm(`ID를 입력하지 않았습니다! ID를 입력해주세요!`);
      setIDborder(`3px solid #DB365A`);
      return;
    }
    if (PWRef.current.value == "") {
      window.confirm(`PW를 입력하지 않았습니다! PW를 입력해주세요!`);
      // PWborder = `4px solid red`;
      setPWborder(`3px solid #DB365A`);
      return;
    }
    if (BirthRef.current.value == "") {
      window.confirm(`생일을 입력하지 않았습니다! 생일을 입력해주세요!`);
      setBirthborder(`3px solid #DB365A`);
      return;
    }
    if (EmailRef.current.value == "") {
      window.confirm(`Email을 입력하지 않았습니다! Email을 입력해주세요!`);
      setEmailborder(`3px solid #DB365A`);
      return;
    }
    if (NameRef.current.value == "") {
      window.confirm(`이름을 입력하지 않았습니다! 이름을 입력해주세요!`);
      setNameborder(`3px solid #DB365A`);
      return;
    }
    if (PWRef.current.value != PWCRef.current.value) {
      window.confirm(
        `비밀번호가 일치하지 않습니다! 비밀번호를 다시 확인해주세요!`
      );
      setPWCborder(`3px solid #DB365A`);
      return;
    }
    try {
      const data = {
        userId: IDRef.current.value,
        password: PWRef.current.value,
        birthday: BirthRef.current.value,
        userEmail: EmailRef.current.value,
        realName: NameRef.current.value,
        gender: GenderRef.current.value,
      };
      const response = await userRegister(data);
      const result = response.data;
      window.alert(`회원가입 완료! 확인을 누르면 로그인 페이지로 이동합니다.`);
      window.location.href = `Login`;
    } catch (error) {
      console.log("회원가입 오류", error);
    }
  }

  return (
    <>
      <Wrap>
        <Title>회원가입</Title>
        <Write>
          <NicknameWrap>
            <Nickname
              type="text"
              placeholder="아이디"
              ref={IDRef}
              onChange={IDInput}
              style={{ border: `${IDborder}` }}
            />
            <Nick_check onClick={userIdCheck}>중복체크</Nick_check>
          </NicknameWrap>

          <Password
            type="password"
            placeholder="패스워드"
            ref={PWRef}
            onChange={PWInput}
            style={{ border: `${PWborder}` }}
          />
          <Password_check
            type="password"
            placeholder="패스워드확인"
            ref={PWCRef}
            onChange={PWCInput}
            style={{ border: `${PWCborder}` }}
          />

          <Birth
            type="date"
            placeholder="생년월일"
            ref={BirthRef}
            onChange={BirthInput}
            style={{ border: `${Birthborder}` }}
          />
          <EmailWrap>
            <Email
              type="email"
              placeholder="이메일"
              ref={EmailRef}
              onChange={EmailInput}
              style={{ border: `${Emailborder}` }}
            />
            <Email_check onClick={userEmailCheck}>중복체크</Email_check>
          </EmailWrap>

          <Name
            type="text"
            placeholder="이름"
            ref={NameRef}
            onChange={NameInput}
            style={{ border: `${Nameborder}` }}
          />

          <Gender>
            <Man>
              <input
                type="radio"
                name="gender"
                value="MALE"
                id="male"
                ref={GenderRef}
                onClick={GenderInput}
                checked
              />
              <label for="male">남성</label>
            </Man>
            <Woman>
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                id="female"
                ref={GenderRef}
                onClick={GenderInput}
              />
              <label for="female">여성</label>
            </Woman>
          </Gender>

          <Btnwrap>
            <button className="backBtn boxBtn" onClick={() => navigate(-1)}>
              뒤로
            </button>
            <button className="boxBtn register" onClick={userSignUp}>
              회원가입
            </button>
          </Btnwrap>
        </Write>
      </Wrap>
    </>
  );
}
