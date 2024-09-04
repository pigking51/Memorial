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
  align-items: center;
  flex-direction: column;
  margin: 100px 0;
`;
const Logo = styled.div`
  width: 390px;
  height: 390px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    animation: wave 2s infinite ease-in-out;
  }

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(0px) translateX(10px);
    }
    50% {
      transform: translateY(0px) translateX(-10px);
    }
    75% {
      transform: translateY(0px) translateX(10px);
    }
  }
`;
const Aside = styled.div`
  height: 700px;
  width: 730px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  color: #333;
  background-color: white;
  padding: 40px;
  border: 10px solid #eb92ae;
  border-radius: 50px;
`;
const Top = styled.div`
  height: fit-content;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
`;
const Middle = styled.div`
  line-height: 26px;
  span {
    font-size: 20px;
  }
`;
const Bottom = styled.div`
  height: fit-content;
  width: 100%;
  line-height: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  p {
    font-size: 25px;
    line-height: 30px;
    height: 30px;
  }
  h5 {
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  span {
    font-size: 20px;
    line-height: 1px;
  }
`;

const Banner = styled.div`
  margin-top: 100px;
  background: linear-gradient(45deg, #bc93f9, #eb92ae);
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

const BackImg = styled.div`
  width: 100%;
  height: 100vh; // 뷰포트 높이에 맞춰 이미지의 높이를 설정
  position: fixed; // 고정된 위치로 설정
  top: 0;
  left: 0;
  z-index: -1; // 다른 요소들보다 뒤에 배치
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; // 배경 이미지를 컨테이너에 맞게 조정
  background-repeat: no-repeat; // 이미지 반복 방지
  background-position: center; // 이미지의 위치를 가운데로 설정
`;

const GameScreen = styled.div`
  margin: 50px 0;
`;

export function Intro() {
  return (
    <>
      <Banner>
        <h1>Introduce</h1>
        <p>메모리얼 소개</p>
      </Banner>
      <Container>
        {/* <Title>
          <span>메모리얼 소개</span>
        </Title> */}

        <Contents>
          <Logo>
            <img src="./images/logo/memorialLogo.png" alt="로고" />
          </Logo>
          <Aside>
            <Top>
              <span>
                카페에 대한 모두의 이야기
                <br />
                MEMORIAL
              </span>
            </Top>
            <Middle>
              <span>
                메모리얼의 사전적인 의미는 기념비, 기념비적인 것이라는 뜻으로
                통하지만
                <br />
                오늘날 메모리얼의 의미는 <strong>기억</strong>과{" "}
                <strong>참여</strong>, <strong>소통</strong>이 이루어지는
                <br />
                공간적인 의미를 부여하고 있습니다.
                <br />
                <br />
                이곳에 오신 모두가 함께 <strong>소통</strong>하고{" "}
                <strong>참여</strong>하며
                <br />
                언젠가 이 순간을 다시 떠올렸을 때 <strong>추억</strong>이라
                생각할 수 있는 공간이 되길 바랍니다.
              </span>
            </Middle>

            <Bottom>
              <p>
                <strong>
                  <h3>“순간이여 멈추어라! 너는 정말로 아름답구나!”</h3>
                </strong>

                <h5> Verweile doch! Du bist so schön!</h5>

                <span>
                  <h5>요한 볼프강 폰 괴테, 『파우스트』, 1828</h5>
                </span>
              </p>
              <br />
            </Bottom>
          </Aside>
        </Contents>
      </Container>
      <svg style={{ display: "none" }}>
        <filter id="wave">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.05"
            numOctaves="5"
            seed="2"
          />
          <feDisplacementMap scale="20" in="SourceGraphic" />
        </filter>
      </svg>
      <BackImg>
        <img src="/images/etc/webBackground.png" alt="info" />
      </BackImg>
    </>
  );
}
