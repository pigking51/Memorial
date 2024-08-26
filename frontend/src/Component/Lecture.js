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
  color: dodgerblue;
  display: flex;
  justify-content: space-between;
`;
const Back = styled.div`
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;
const Section = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 40px;
`;
const Subscribe = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  color: rgb(235, 146, 174);
  border-width: 3px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid rgb(235, 146, 174);
  margin-left: 90%;
`;
const Study = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  color: rgb(235, 146, 174);
  border-width: 3px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid rgb(235, 146, 174);
  margin-left: 90%;
`;

const Banner = styled.div`
  background-color: rgb(235, 146, 174);
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 30px;
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
          window.location.href = `/streaming/${id}`;
        } else {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log("구독신청과정 오류", error);
      if (window.confirm(`로그인하지 않았습니다! 로그인해주세요!`)) {
        navigate("/login");
      } else {
        window.location.reload();
      }
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
