import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconBack } from "./Icons";
import { getLectureDetailById, getMyLecture, getNowUser } from "./api";
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
  width: 80%;
  margin: 0 auto;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;
const Section = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 40px;
`;
const Subscribe = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  color: #00deff;
  border-width: 3px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid #00d1fe;
  margin-left: 90%;
`;
const Study = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  color: #00deff;
  border-width: 3px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  border: 2px solid #00d1fe;
  margin-left: 90%;
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
  console.log(detail);
  async function subOrStudy() {
    try {
      const currentResponse = await getNowUser();
      const CRUserId = currentResponse.data.data.userId;
      const response = await getMyLecture(CRUserId);
      const data = response.data;
      console.log(data);
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
  return (
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
                  <Study>강의듣기</Study>
                ) : (
                  <Subscribe>신청하기</Subscribe>
                )}
              </p>
            </Content>
            <Back onClick={() => navigate(-1)}>
              <IconBack />
            </Back>
          </Section>
        </>
      )}
    </Container>
  );
}
