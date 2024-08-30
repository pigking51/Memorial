import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconBack } from "./Icons";
import {
  getLectureDetailById,
  getMyLecture,
  getNowUser,
  saveLecture,
} from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const Back = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;
const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Content = styled.div`
  font-size: large;
  line-height: 40px;
  margin-top: 50px;
  color: #333;
  p {
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 40px;
`;
const Subscribe = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb92ae;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(219, 54, 90, 0.9);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
  border-radius: 30px;
  border-top: 3px solid #eb92ae;
  border-right: 3px solid #fde9f3;
  border-bottom: 3px solid #db365a;
  border-left: 3px solid #fcd3e6;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;
const Study = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb92ae;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(219, 54, 90, 0.9);
  font-weight: 500;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
  border-radius: 30px;
  border-top: 3px solid #eb92ae;
  border-right: 3px solid #fde9f3;
  border-bottom: 3px solid #db365a;
  border-left: 3px solid #fcd3e6;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

const Banner = styled.div`
  background: linear-gradient(50deg, #bc93f9, #eb92ae);
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

export function Lecture() {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getLectureInfo();
  }, []);

  useEffect(() => {
    subOrStudy();
  }, []);

  async function getLectureInfo() {
    try {
      let response = await getLectureDetailById(id);
      console.log(response);
      setDetail(response.data);
    } catch (error) {
      console.log("오류발생", error);
    }
  }
  async function subOrStudy() {
    try {
      const currentResponse = await getNowUser();
      const CRUserId = currentResponse.data.data.userId;
      console.log(currentResponse.data.data);
      const response = await getMyLecture(CRUserId);
      const data = response.data;
      let i = 0;
      let lec_arr = [];
      for (i = 0; i < data.length; i++) {
        lec_arr.push(data[i].lecture.lectureId);
      }
      if (lec_arr.indexOf(parseInt(id, 10)) != -1) {
        setIsSubscribe(true);
        console.log("현재 구독상태");
      }
    } catch (error) {
      console.log("구독여부 확인오류", error);
    }
  }
  async function doSubscribe() {
    try {
      const currentResponse = await getNowUser();
      const CURLECResponse = await getLectureDetailById(parseInt(id, 10));
      const userData = currentResponse.data.data.userId;
      const userData2 = currentResponse.data.data.authority[0].authority;
      const lectureData = CURLECResponse.data;
      console.log(CURLECResponse.data);
      console.log(userData2);
      console.log(currentResponse.data.data);
      const data = {
        user: { userId: userData, authority: { authorityName: userData2 } },
        lecture: lectureData,
      };
      const response = await saveLecture(data);
      if (response.data != null) {
        if (
          window.confirm(`강의를 신청했습니다. 강의를 들으러 가시겠습니까?`)
        ) {
          navigate(`/streaming/${id}`);
        } else {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("구독신청과정 오류", error);
    }
  }
  function goToStreaming() {
    window.location.href = `/streaming/${id}`;
  }
  return (
    <>
      <Banner>
        <h1>Lecture</h1>
        <p>강의</p>
      </Banner>
      <Container>
        {detail && (
          <>
            <Section>
              <Header>
                <h1>{detail.title}</h1>
                <Back onClick={() => navigate(-1)}>
                  <IconBack />
                </Back>
              </Header>
              <Img src={detail.image} />
              <Content>
                <p>
                  <b>타이틀</b> : {detail.lectureTitle}
                </p>
                <p>
                  <b>분야</b> : {detail.major}
                </p>
                <hr />
                <p>
                  <p>
                    <b>설명</b> : {detail.text}
                  </p>
                  {isSubscribe ? (
                    <Study onClick={goToStreaming}>강의듣기</Study>
                  ) : (
                    <Subscribe onClick={doSubscribe}>신청하기</Subscribe>
                  )}
                </p>
              </Content>
              <Back onClick={() => navigate(-1)}>{/* <IconBack /> */}</Back>
            </Section>
          </>
        )}
      </Container>
    </>
  );
}
