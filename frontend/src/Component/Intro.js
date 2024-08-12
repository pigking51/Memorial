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
  height: 500px;
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
  line-height: 20px;
  span {
    font-size: 20px;
  }
`;
const Bottom = styled.div`
  height: 130px;
  margin-top: 30px;
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

export function Intro() {
  return (
    <>
      <img src="/images/banner/introBanner.png" alt="Intro Image" />
      <Container>
        <Title>
          <span>메모리얼 소개</span>
        </Title>

        <Contents>
          <Logo>
            <a href="#">
              {/* <img src="./images/logo/logo2.png" alt="로고2" /> */}
              <img
                src="./images/logo/memorialLogo.png"
                width="390"
                height="390"
                alt="로고"
              />
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
                메모리얼의 사전적인 의미는 기념비, 기념비적인 것이라는 뜻으로
                통하지만
                <br />
                오늘날 메모리얼의 의미는 <strong>기억</strong>과{" "}
                <strong>참여</strong>, <strong>소통</strong>이 이루어지는
                공간적인 의미 를 부여하고 있습니다.
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
                <strong>“순간이여 멈추어라! 너는 정말로 아름답구나!”</strong>
                <br />
                <h5>Verweile doch! Du bist so schön!</h5>
              </p>
              <br />
              <span>요한 볼프강 폰 괴테, 『파우스트』, 1828</span>
            </Bottom>
          </Aside>
        </Contents>
      </Container>
    </>
  );
}
