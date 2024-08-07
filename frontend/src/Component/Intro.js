import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  height: 120px;
  text-align: center;
  line-height: 120px;
  font-size: 50px;
  margin-top: 50px;
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 600px;
`;
const Logo = styled.div`
  width: 400px;
  height: 400px;
`;
const Aside = styled.div`
  margin-left: 50px;
  height: 400px;
  width: 740px;
`;
const Top = styled.div`
  height: 100px;
  margin-top: 20px;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
`;
const Middle = styled.div`
  height: 130px;
  line-height: 30px;
  span {
    font-size: 20px;
  }
`;
const Bottom = styled.div`
  height: 130px;
  margin-top: 30px;
  p {
    font-size: 20px;
    line-height: 30px;
    height: 30px;
  }
  span {
    font-size: 20px;
    line-height: 30px;
  }
`;

export function Intro() {
  return (
    <>
      <Container>
        <Title>
          <span> 메모리얼 소개</span>
        </Title>

        <Contents>
          <Logo>
            <a href="#">
              <img src="./images/logo/logo2.png" alt="로고2" />
            </a>
          </Logo>
          <Aside>
            <Top>
              <span>
                카페에 대한
                <br />
                모두의 이야기.
              </span>
            </Top>
            <Middle>
              <span>
                무비딕은 거대한 향유고래 모비딕(Moby Dick)에서 따온 말 입니다.
                <br />
                영화를 뜻하는 <strong>Movie</strong>와 <strong>사전</strong>을
                뜻하는 <strong>Dictionary</strong>의 <strong>DIC</strong>의
                합성어로,
                <br />
                향유고래 모비딕처럼 거대한 영화사전을 모두가 함께 만들어 나가며
                <br />
                영화같은 모두 이야기를 담아내고자 하는 의미가 담겨있습니다.
              </span>
            </Middle>

            <Bottom>
              <p>“사진이 진실이라면 영화는 초당 24번의 진실이다.”</p>
              <span>
                장뤽 고다르 (1954~2024) /<br />
                영화 감독, 영화 평론가
              </span>
            </Bottom>
          </Aside>
        </Contents>
      </Container>
    </>
  );
}
