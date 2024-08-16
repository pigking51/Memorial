import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  getNowUser,
  getMyLecture,
  showAllUser,
  getLectureTop4,
  modifyData,
} from "./api";
import "./Mypage.css";

// 강의정보
const Found = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: right;
  background-color: #00d1fe;
  padding-right: 56px;
`;
const FoundSearch = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 250px;
    margin-right: 30px;
    height: 30px;
    border-radius: 4px;
    border: none;
    font-size: 15px;
    padding: 0 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button {
    transition: 0.3s;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    background-color: #fff;
    border: none;
    font-size: 15px;
    color: #00d1fe;
    font-weight: bold;
    margin-top: 10px;
    border-radius: 30px;
    &:hover {
      opacity: 0.6;
    }
  }
`;
const User = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 25%;
  border-right: 1px solid #999;
  position: relative;
  ul {
    width: fit-content;
    height: auto;
    list-style: none;
    margin: 38% 10%;
  }
  li {
    width: 250px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  li:first-child {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #00d1fe;
    }
  }
`;
const Myclass = styled.li`
  cursor: pointer;
`;
const UserEdit = styled.li`
  cursor: pointer;
`;
const UserData = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Mylecture = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  h2 {
    width: auto;
    height: auto;
    margin: 30px 0 30px 30px;
    border-bottom: 3px solid #00d1fe;
    padding: 15px;
  }
`;
const LectureWrap = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  overflow: scroll;
  overflow-x: hidden;
`;
const LectureBox = styled.div`
  border: 3px solid #00d1fe;
  border-bottom: 8px solid #00d1fe;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: calc(100% - 50px);
  margin-left: 25px;
  margin-bottom: 15px;
  font-size: 25px;
  font-family: "GmarketSansMedium";
  cursor: pointer;
  button {
    transition: 0.3s;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background-color: #00d1fe;
    border: none;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    margin: 10px auto;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.6;
  }
`;
const BestLecture = styled.div`
  width: 100%;
  height: 300px;
`;
const BestLectureList = styled.ul`
  width: 100%;
  height: 300px;
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    width: calc(25% - 22px);
    height: 100%;
    margin: 0px 10px;
    border: 1px solid #000;
    border-radius: 4px;
    position: relative;
    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      span {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 36%;
        color: #fff;
        font-family: "GmarketSansMedium";
        font-size: 18px;
        bottom: 0;
        p {
          width: 100%;
          height: auto;
          text-align: left;
          padding-left: 20px;
        }
      }
    }
  }
`;
const Picture = styled.p`
  height: 64%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const SubText = styled.span``;
// 유저정보수정
const UserModify = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  /* display: none; */
  display: block;
  h2 {
    width: auto;
    height: auto;
    margin: 30px 0 30px 30px;
    border-bottom: 3px solid #00d1fe;
    padding: 15px;
  }
`;
const Write = styled.div`
  height: auto;
  margin: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Password = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #00d1fe;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const PasswordCheck = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #00d1fe;
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
  width: 400px;
`;
const Email = styled.input`
  width: 290px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #00d1fe;
  font-size: 15px;
  padding: 0 20px;
`;
const EmailCheck = styled.button`
  transition: 0.3s;
  width: 100px;
  height: 50px;
  border-radius: 30px;
  background-color: #00d1fe;
  border: none;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  &:hover {
    border: #00d1fe 2px solid;
    background-color: #fff;
    color: #00d1fe;
    cursor: pointer;
  }
`;
const Name = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #00d1fe;
  font-size: 15px;
  padding: 0 20px;
  margin-top: 30px;
`;
const Gender = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  input {
    width: auto;
    height: auto;
    cursor: pointer;
    box-shadow: none;
    margin-right: 10px;
  }
  label {
    font-size: 18px;
    width: auto;
    margin-right: 30px;
    text-align: center;
  }
`;
const Btnwrap = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  justify-content: space-around;
  align-items: center;
`;

export function Mypage() {
  const [userCData, setUserCData] = useState(null);
  const [data, setData] = useState(null);
  const [lecData, setLecData] = useState(null);
  const [isLecNull, setIsLecNull] = useState(false);

  useEffect(() => {
    mypageContent();
  }, []);

  let CPassword = "";
  let CHPassword = "";
  let CEmail = "";
  let CName = "";
  let CGender = "";

  const CPWRef = useRef();
  const CHPWRef = useRef();
  const CEmailRef = useRef();
  const CNameRef = useRef();
  const CGenderRef = useRef();

  function inputPW() {
    CPassword = CPWRef.current.value;
    console.log(CPassword);
  }
  function inputCHPW() {
    CHPassword = CHPWRef.current.value;
    console.log(CHPassword);
  }
  function inputEmail() {
    CEmail = CEmailRef.current.value;
    console.log(CEmail);
  }
  function inputGender() {
    CGender = CGenderRef.current.value;
    console.log(CGender);
  }
  function inputName() {
    CName = CNameRef.current.value;
    console.log(CName);
  }
  async function modifyUser() {
    const data = {
      password: CPassword,
      email: CEmail,
      gender: CGender,
      realName: CName,
    };
    if (CPassword != CHPassword) {
      window.confirm(`비밀번호가 일치하지 않습니다!`);
      return;
    }
    try {
      const currentResponse = await getNowUser();
      const CRUserId = currentResponse.data.data.userId;
      console.log(CRUserId);

      const modifyResponse = await modifyData(CRUserId, data);
      if (modifyResponse) {
        window.confirm(`회원정보 수정 완료!`);
      }
    } catch (error) {
      console.log("회원정보 수정 오류", error);
    }
  }

  async function isEmailDupe() {
    try {
      const response = await showAllUser();
      const data = response.data;
      let i = 0;
      let email_arr = [];
      for (i = 0; i < data.length; i++) {
        email_arr.push(data[i].email);
      }
      if (email_arr.indexOf(CEmailRef.current.value) == -1) {
        if (
          !window.confirm(
            `사용 가능한 Email입니다! 해당 Email을 사용하시겠습니까?`
          )
        ) {
          CEmailRef.current.value = "";
        }
      } else {
        window.confirm(`중복된 Email입니다! 다른 Email을 입력해주세요`);
      }
    } catch (error) {
      console.log(`Email 중복확인 오류`, error);
    }
  }

  async function mypageContent() {
    try {
      // 내 정보
      const allResponse = await showAllUser();
      const allData = allResponse.data;
      console.log(allData);
      const currentResponse = await getNowUser();
      const CRData = currentResponse.data;
      console.log(CRData);
      console.log(CRData.data.userId);

      // 내 강의 정보
      const MyResponse = await getMyLecture(CRData.data.userId);
      const MRData = MyResponse.data;
      console.log(MRData);
      setData(MRData);

      let i = 0;
      for (i = 0; i < allData.length; i++) {
        if (allData[i].userId == CRData.data.userId) {
          console.log(allData[i]);
          setUserCData(allData[i]);
          break;
        }
      }

      // 인기강의 현황 불러오기
      const LecRankResponse = await getLectureTop4();
      const LRData = LecRankResponse.data;
      console.log(LRData);
      setLecData(LRData);

      // 강의 구독여부

      if (MRData.length == 0) {
        setIsLecNull(true);
      }

      // 회원정보 수정
    } catch (error) {
      console.log("데이터 호출 실패", error);
    }
  }
  // 화면전환 토글만들기

  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);

  function goToStreaming(lecId) {
    window.location.href = `/streaming/${lecId}`;
  }

  return (
    <>
      <Found>
        <FoundSearch>
          <input type="search" id="found" placeholder="검색" />
          <button>검색</button>
        </FoundSearch>
      </Found>

      <User>
        <UserInfo>
          <ul>
            <li>{userCData && userCData.realName}님 환영합니다.</li>
            <Myclass>
              <a
                onClick={() => {
                  if (visible2) {
                    setVisible(!visible);
                    setVisible2(!visible2);
                  }
                }}
              >
                내 강의 보기
              </a>
            </Myclass>
            <UserEdit>
              <a
                onClick={() => {
                  if (visible) {
                    setVisible2(!visible2);
                    setVisible(!visible);
                  }
                }}
              >
                회원정보 수정
              </a>
            </UserEdit>
            {/* <UserEdit>
              <a href="dashboard.html">대시보드 바로가기</a>
            </UserEdit> */}
          </ul>
        </UserInfo>

        <UserData>
          {visible && (
            <Mylecture>
              <h2>내 강의 보기</h2>
              <LectureWrap>
                {isLecNull == false ? (
                  data &&
                  data.map((dat) => (
                    <LectureBox
                      onClick={() => goToStreaming(dat.lecture.lectureId)}
                    >
                      {dat.lecture.lectureTitle}
                    </LectureBox>
                  ))
                ) : (
                  <LectureBox>구독한 강의가 없습니다</LectureBox>
                )}
              </LectureWrap>
              <h2>☆ MEMORIAL이 추천하는 BEST 강좌 ☆</h2>
              <BestLecture>
                <BestLectureList>
                  {lecData &&
                    lecData.map((LData, index) => (
                      <li>
                        <a href="#">
                          <Picture>
                            <img src={LData.lecture.image} />
                          </Picture>
                          <SubText>
                            <p>순위: {index + 1}위</p>
                            <p>강의제목: {LData.lecture.lectureTitle}</p>
                            <p>수강신청 수: {LData.count}명</p>
                          </SubText>
                        </a>
                      </li>
                    ))}
                </BestLectureList>
              </BestLecture>
            </Mylecture>
          )}

          {visible2 && (
            <UserModify>
              <h2>회원정보 수정</h2>

              <Write>
                <Password
                  type="password"
                  ref={CPWRef}
                  placeholder="패스워드"
                  onChange={inputPW}
                />
                <PasswordCheck
                  type="password"
                  ref={CHPWRef}
                  placeholder="패스워드확인"
                  onChange={inputCHPW}
                />

                <EmailWrap>
                  <Email
                    type="email"
                    ref={CEmailRef}
                    placeholder="이메일"
                    onChange={inputEmail}
                  />
                  <EmailCheck onClick={isEmailDupe}>중복체크</EmailCheck>
                </EmailWrap>

                <Name
                  type="text"
                  ref={CNameRef}
                  placeholder="이름"
                  onChange={inputName}
                />

                <Gender>
                  <input
                    type="radio"
                    ref={CGenderRef}
                    name="gender"
                    value="MALE"
                    id="male"
                    onChange={inputGender}
                  />
                  <label for="male">남성</label>

                  <input
                    type="radio"
                    ref={CGenderRef}
                    name="gender"
                    value="FEMALE"
                    id="female"
                    onChange={inputGender}
                  />
                  <label for="female">여성</label>
                </Gender>

                <Btnwrap>
                  <button className="backBtn boxBtn">취소</button>
                  <button className="boxBtn register" onClick={modifyUser}>
                    수정하기
                  </button>
                </Btnwrap>
              </Write>
            </UserModify>
          )}
        </UserData>
      </User>
    </>
  );
}
