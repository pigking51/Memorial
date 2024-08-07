import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
`;
const Contents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 200px;
  margin-bottom: 50px;
  span {
    text-align: center;
    font-size: 35px;
    margin-top: 50%;
    color: #00d1fe;
    height: auto;
  }
`;
const Card = styled.div`
  min-width: 487px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  padding-bottom: 20px;
  p {
    height: fit-content;
    width: 100%;
    font-size: 18px;
    margin: 25px;
  }
  &:hover {
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.4);
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

// const categories = [
//   { category: "Now Playing", func: getLecturesNowPlaying },
//   { category: "Popular", func: getLecturesPopular },
//   { category: "Top Rated", func: getLecturesTopRated },
//   { category: "Upcoming", func: getLecturesUpcoming },
// ];

export function Education() {
  const [data, setData] = useState(null);
  // const [category, setCategory] = useContext(LectureContext);
  const navigate = useNavigate();

  useEffect(() => {
    // setPartListOfLecture(category);
    showLecture();
  }, []);

  async function showLecture() {
    const url = "http://localhost:8080/lectures/getalllectures";

    try {
      const response = await axios.get(url, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      // const response = await categories[index].func();
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
  );
}
