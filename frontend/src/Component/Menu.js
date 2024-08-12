import styled from "styled-components";

export function Menu() {
  const Container = styled.div``;
  const Content = styled.div`
    width: 100%;
    height: 650px;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  `;
  const Text = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p:first-child {
      display: inline-flex;
      justify-content: center;
      font-size: 50px;
      width: 100px;
      border-bottom: 1px solid black;
      margin-bottom: 20px;
    }
  `;
  const MenuChoice = styled.ul`
    list-style: none;
    display: flex;
    li {
      border: 1px solid black;
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    li:first-child {
      background-color: #d9d9d9;
    }
  `;
  const SubTitle = styled.div`
    margin: 50px auto;
    width: calc(100% - 600px);
    border-bottom: 1px solid black;
    p {
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
    }
  `;
  const BtContent = styled.div``;
  const BtContentTitle = styled.div`
    width: 100%;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    p {
      width: 75px;
      height: auto;
      border-bottom: 3px solid black;
    }
  `;
  const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin: 200px 0;
  `;
  const ImageBox = styled.div`
    width: 270px;
    p {
      margin-top: 30px;
      width: 100%;
      text-align: center;
    }
  `;
  const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 270px;
    border: 2px solid black;
    p {
      font-size: 20px;
      font-weight: bold;
    }
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

  return (
    <>
      <Banner>
        <h1>MENU</h1>
        <p>메뉴</p>
      </Banner>
      <Container>
        <Content>
          <Text>
            <p></p>
            <p></p>
          </Text>
          <MenuChoice>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </MenuChoice>
        </Content>
        <SubTitle>
          <p></p>
        </SubTitle>
        <BtContent>
          <BtContentTitle>
            <p></p>
          </BtContentTitle>
          <ImageContainer>
            <ImageBox>
              <Image>
                <img src="/images/img/피스타치오.png" />
              </Image>
              <p>
                피스타치오 매직팝 플랫치노
                <br />
                4,500원
              </p>
            </ImageBox>
            <ImageBox>
              <Image>
                <p>
                  <img src="/images/img/초당옥수수.png" />
                </p>
              </Image>
              <p>
                초당옥수수 1인빙수
                <br />
                6,300원
              </p>
            </ImageBox>
            <ImageBox>
              <Image>
                <p>
                  <img src="/images/img/크림폭포.png" />
                </p>
              </Image>
              <p>
                바닐라 크림폭포 데니쉬
                <br />
                6,300원
              </p>
            </ImageBox>
          </ImageContainer>
        </BtContent>
      </Container>
    </>
  );
}
