import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { showAllLectures } from "./api";

const NotLoading = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const Opps = styled.p`
  position: relative;
  font-size: 64px;
  font-weight: bolder;
`;

const Container = styled.div`
  width: 100%;
`;
const Contents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 200px;
  margin: 100px 0px 100px 0px;
  justify-content: center;
  span {
    text-align: center;
    font-size: 35px;
    margin-top: 50%;
    color: #db365a;
    height: auto;
  }
`;
const Card = styled.div`
  min-width: 487px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 4px 4px 8px 1px #fcd3e6;
  transition: all 0.2s ease;
  padding-bottom: 20px;
  p {
    height: fit-content;
    width: 100%;
    font-size: 20px;
    margin: 25px;
  }
  &:hover {
    box-shadow: 2px 2px 5px 5px #eb92ae;
    transform: translate(0px, -5px);
    filter: brightness(120%);
    cursor: pointer;
    opacity: 0.7;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 280px;
  padding: 0;
  border-radius: 8px;
`;
const Text = styled.div`
  color: #333;
  margin: 2px 0;
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

export function Education() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    showLecture();
  }, []);

  // 강의 데이터 불러오기
  async function showLecture() {
    try {
      const response = await showAllLectures();
      const data = response.data;
      console.log(data);
      let i = 0;
      for (i = 0; i < data.length; i++) {
        console.log(data[i].lectureId);
        console.log(data[i].lectureTitle);
        console.log(data[i].major);
        console.log(data[i].text);
      }
      setData(data);
    } catch (error) {
      console.log("오류 발생", error);
    }
  }

  return (
    <>
      {data == null ? (
        <NotLoading>
          <Opps>이런! 데이터를 불러오지 못했습니다!!!!</Opps>
        </NotLoading>
      ) : (
        <>
          <Banner>
            <h1>Lecture</h1>
            <p>강의</p>
          </Banner>
          <br></br>
          <Container>
            <Contents>
              {data &&
                data.map((lec) => (
                  <Card
                    key={lec.lectureId}
                    onClick={() => {
                      navigate(`${lec.lectureId}`);
                    }}
                  >
                    <Img src={lec.image}></Img>
                    <Text>
                      <b>타이틀</b> :{lec.lectureTitle}
                    </Text>
                    <Text>
                      <b>분야</b> : {lec.major}
                    </Text>
                    <Text>
                      <b>설명</b> : {lec.text}
                    </Text>
                  </Card>
                ))}
            </Contents>
          </Container>
        </>
      )}
    </>
  );
}
