import { useState } from "react";
import styled from "styled-components";

export function Menu() {
  const [visible, setVisible] = useState("New-Menu");

  const Container = styled.div``;
  const Content = styled.div`
    width: 100%;
    height: auto;
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
      width: auto;
      border-bottom: 2px solid #eb92ae;
      margin-bottom: 20px;
      color: #eb92ae;
    }
  `;
  const BackGroundImage = styled.div`
    img {
      width: 100%;
      height: 80%;
      position: absolute;
      z-index: -1;
      right: 0;
      top: 0;
    }
  `;
  const MenuChoice = styled.ul`
    list-style: none;
    display: flex;
    li {
      border: 1px solid #e38ca6;
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e38ca6;
      background-color: #fff;
    }
    li:hover {
      background-color: #f3e1eb;
      cursor: pointer;
    }
  `;
  const SubTitle = styled.div`
    margin: 50px auto;
    width: calc(100% - 600px);
    border-bottom: 1px solid #eb92ae;
    p {
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
      color: #333;
    }
  `;
  const BtContentTitle = styled.div`
    width: 100%;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    p {
      width: auto;
      height: auto;
      border-bottom: 3px solid #eb92ae;
      color: #db365a;
    }
  `;
  const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin: 200px 0;
    align-items: center;
  `;
  const ImageBox = styled.div`
    width: 300px;
    p {
      margin-top: 30px;
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: #333;
    }
  `;
  const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 2px solid #eb92ae;
    background-color: #f3e1eb;
    border-radius: 4px;
    p {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
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
  const PrevButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    img:hover {
      opacity: 0.7;
    }
  `;
  const NextButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    img:hover {
      opacity: 0.7;
    }
  `;

  const renderContent = (title, items) => (
    <>
      <SubTitle>
        <p>{title}</p>
      </SubTitle>
      <BtContentTitle>
        <p>{title}</p>
      </BtContentTitle>
      <ImageContainer>
        <PrevButton>
          <img src="/images/icon/Prev.png" />
        </PrevButton>
        {items.map((item, index) => (
          <ImageBox key={index}>
            <Image>
              <img src={item.img} />
            </Image>
            <p>
              {item.name}
              <br />
              {item.price}
            </p>
          </ImageBox>
        ))}
        <NextButton>
          <img src="/images/icon/Next.png" />
        </NextButton>
      </ImageContainer>
    </>
  );

  const contentMap = {
    "New-Menu": {
      title: "8th-New-Menu",
      items: [
        {
          img: "/images/img/피스타치오.png",
          name: "피스타치오 매직팝 플랫치노",
          price: "4,500원",
        },
        {
          img: "/images/img/초당옥수수.png",
          name: "초당옥수수 1인빙수",
          price: "6,300원",
        },
        {
          img: "/images/img/크림폭포.png",
          name: "바닐라 크림폭포 데니쉬",
          price: "6,300원",
        },
      ],
    },
    Coffee: {
      title: "Coffee",
      items: [
        {
          img: "/images/img/피스타치오.png",
          name: "피스타치오 매직팝 플랫치노",
          price: "4,500원",
        },
        {
          img: "/images/img/초당옥수수.png",
          name: "초당옥수수 1인빙수",
          price: "6,300원",
        },
        {
          img: "/images/img/크림폭포.png",
          name: "바닐라 크림폭포 데니쉬",
          price: "6,300원",
        },
      ],
    },
    Drink: {
      title: "Drink",
      items: [
        {
          img: "/images/img/피스타치오.png",
          name: "피스타치오 매직팝 플랫치노",
          price: "4,500원",
        },
        {
          img: "/images/img/초당옥수수.png",
          name: "초당옥수수 1인빙수",
          price: "6,300원",
        },
        {
          img: "/images/img/크림폭포.png",
          name: "바닐라 크림폭포 데니쉬",
          price: "6,300원",
        },
      ],
    },
    Dessert: {
      title: "Dessert",
      items: [
        {
          img: "/images/img/피스타치오.png",
          name: "피스타치오 매직팝 플랫치노",
          price: "4,500원",
        },
        {
          img: "/images/img/초당옥수수.png",
          name: "초당옥수수 1인빙수",
          price: "6,300원",
        },
        {
          img: "/images/img/크림폭포.png",
          name: "바닐라 크림폭포 데니쉬",
          price: "6,300원",
        },
      ],
    },
    Cookie: {
      title: "Cookie",
      items: [
        {
          img: "/images/img/피스타치오.png",
          name: "피스타치오 매직팝 플랫치노",
          price: "4,500원",
        },
        {
          img: "/images/img/초당옥수수.png",
          name: "초당옥수수 1인빙수",
          price: "6,300원",
        },
        {
          img: "/images/img/크림폭포.png",
          name: "바닐라 크림폭포 데니쉬",
          price: "6,300원",
        },
      ],
    },
  };

  return (
    <Container>
      <Content>
        <Banner>
          <h1>Special Offer</h1>
          <p>Up to 50% off on selected items</p>
        </Banner>
        <BackGroundImage>
          <img src="/images/bg/bg1.png" alt="Background" />
        </BackGroundImage>
        <Text>
          <p>Menu</p>
        </Text>
        <MenuChoice>
          {Object.keys(contentMap).map((key) => (
            <li key={key} onClick={() => setVisible(key)}>
              {contentMap[key].title}
            </li>
          ))}
        </MenuChoice>
        {renderContent(contentMap[visible].title, contentMap[visible].items)}
      </Content>
    </Container>
  );
}
