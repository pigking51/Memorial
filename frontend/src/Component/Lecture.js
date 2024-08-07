import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconBack } from "./Icons";
import { getLectureDetailById } from "./api";
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

export function Lecture() {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getLectureInfo();
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
                <b>설명</b> : {detail.text}
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
