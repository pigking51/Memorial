import { useEffect, useState } from "react";
import styled from "styled-components";
import { getNowUser, getMyLecture, showAllUser } from "./api";

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
  height: auto;
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
const Myclass = styled.li``;
const UserEdit = styled.li``;
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
const LectureBox = styled.div``;
const BestLecture = styled.div``;
const BestLectureList = styled.ul``;
const Picture = styled.p``;
const SubText = styled.span``;
// 유저정보수정
const UserModify = styled.div``;
const Write = styled.div`
  height: auto;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Password = styled.input``;
const PasswordCheck = styled.input``;
const EmailWrap = styled.div``;
const Email = styled.input``;
const EmailCheck = styled.button``;
const Name = styled.input``;
const Gender = styled.div``;
const Btnwrap = styled.div``;

export function Mypage() {
  let userRName = "";

  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const response = getNowUser();
  //   const uData = response.data;
  //   console.log(uData);

  //   setUserData(uData);
  // }, []);

  useEffect(() => {
    const response = getMyLecture(userData.userId);
    const Mylecture = response.data;
    console.log(Mylecture);

    setData(Mylecture);
  }, []);

  useEffect(() => {
    mypageContent();
  }, []);

  async function mypageContent() {
    try {
      const allResponse = await showAllUser();
      const allData = allResponse.data;
      const currentResponse = await getNowUser();
      const CRData = currentResponse.data;

      let i = 0;
      for (i = 0; i < allData.length; i++) {
        if (allData[i].userId == CRData.userId) {
          setUserData(allData[i]);
          userRName = allData[i].realName;
          break;
        }
      }
    } catch (error) {
      console.log("데이터 호출 실패", error);
    }
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
          <ul href="#">
            <li>{userRName}</li>
            <Myclass>
              <a href="#">내 강의 보기</a>
            </Myclass>
            <UserEdit>
              <a href="#">회원정보 수정</a>
            </UserEdit>
            <UserEdit>
              <a href="dashboard.html">대시보드 바로가기</a>
            </UserEdit>
          </ul>
        </UserInfo>

        <UserData>
          <Mylecture>
            <h2>내 강의 보기</h2>
            <LectureWrap>
              <LectureBox>강의1</LectureBox>
              <LectureBox>강의2</LectureBox>
            </LectureWrap>
            {data &&
              data.map((dat) => (
                <LectureWrap>
                  <LectureBox>{dat.lecture}</LectureBox>
                </LectureWrap>
              ))}
            <h2>☆ MOVIE DIC이 추천하는 BEST 강좌 ☆</h2>
            <BestLecture>
              <BestLectureList>
                <li>
                  <a href="#">
                    <Picture>토이스토리 사진</Picture>
                    <SubText> </SubText>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Picture>강동원 사진</Picture>
                    <SubText> </SubText>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Picture>업 사진</Picture>
                    <SubText> </SubText>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Picture>쇼생크 탈출</Picture>
                    <SubText> </SubText>
                  </a>
                </li>
              </BestLectureList>
            </BestLecture>
          </Mylecture>

          <UserModify>
            <h2>회원정보 수정</h2>

            <Write>
              <Password type="password" placeholder="패스워드" />
              <PasswordCheck type="password" placeholder="패스워드확인" />

              <EmailWrap>
                <Email type="email" placeholder="이메일" />
                <EmailCheck>중복체크</EmailCheck>
              </EmailWrap>

              <Name type="text" placeholder="이름" />

              <Gender>
                <input type="radio" name="gender" value="MALE" id="male" />
                <label for="male">남성</label>

                <input type="radio" name="gender" value="FEMALE" id="female" />
                <label for="female">여성</label>
              </Gender>

              <Btnwrap>
                <button className="backBtn boxBtn">취소</button>
                <button className="boxBtn register">수정하기</button>
              </Btnwrap>
            </Write>
          </UserModify>
        </UserData>
      </User>
    </>
  );
}
