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
  height: 600px;
  align-items: center;
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
      transform: translateY(-5px) translateX(5px);
    }
    50% {
      transform: translateY(-10px) translateX(-5px);
    }
    75% {
      transform: translateY(-5px) translateX(5px);
    }
  }
`;
const Aside = styled.div`
  margin-left: 50px;
  height: 500px;
  width: 740px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #333;

  /* justify-content: center; */
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
  line-height: 40px;
  p {
    font-size: 20px;
    line-height: 30px;
    height: 30px;
  }
  h5 {
    font-weight: 200;
    text-indent: 8px;
  }
  span {
    font-size: 20px;
    line-height: 30px;
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
                카페에 대한
                <br />
                모두의 이야기.
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
                {/* <br /> */}
                <h5> Verweile doch! Du bist so schön!</h5>
              </p>
              <br />
              <span>
                <h5>요한 볼프강 폰 괴테, 『파우스트』, 1828</h5>
              </span>
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
    </>
  );
}
