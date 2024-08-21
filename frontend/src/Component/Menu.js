import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Styled components (same as before)

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
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  li:hover {
    background-color: #f3e1eb;
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

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  position: relative;
  overflow: hidden;
  height: 400px; /* Adjust height as needed */
  display: flex;
  align-items: center;
  margin: 200px 0;
  transition: transform 0.3s ease-in-out;
`;

const ImageBox = styled.div`
  width: 300px; /* Width of each item */
  margin: 0 20px; /* Adjusted margin */
  transition: transform 0.3s ease-in-out;
  transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
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

  img {
    width: 150px;
    height: 150px;
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
    margin: 0;
  }
  p {
    font-size: 30px;
    margin: 0;
  }
`;

const PrevButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
`;

const NextButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
`;

export function Menu() {
  const [visible, setVisible] = useState("New-Menu");
  const [translateValue, setTranslateValue] = useState(0);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Reset translateValue when the visible menu changes
    setTranslateValue(0);
  }, [visible]);

  const handlePrevClick = () => {
    const containerWidth = imageContainerRef.current.offsetWidth;
    const itemWidth = 300 + 40; // Width of each item + margin
    const maxTranslateValue = 0;

    setTranslateValue((prev) => {
      const newTranslateValue = prev + itemWidth;
      return newTranslateValue > maxTranslateValue
        ? maxTranslateValue
        : newTranslateValue;
    });
  };

  const handleNextClick = () => {
    const containerWidth = imageContainerRef.current.offsetWidth;
    const itemWidth = 300 + 40; // Width of each item + margin
    const contentWidth = imageContainerRef.current.scrollWidth;
    const maxTranslateValue = containerWidth - contentWidth;

    setTranslateValue((prev) => {
      const newTranslateValue = prev - itemWidth;
      return newTranslateValue < maxTranslateValue
        ? maxTranslateValue
        : newTranslateValue;
    });
  };

  const renderContent = (title, items) => (
    <>
      <SubTitle>
        <p>{title}</p>
      </SubTitle>
      <BtContentTitle>
        <p>{title}</p>
      </BtContentTitle>
      <ContentBox>
        <PrevButton onClick={handlePrevClick}>
          <img src="/images/icon/Prev.png" alt="Previous" />
        </PrevButton>
        <ImageContainer
          ref={imageContainerRef}
          style={{ width: `calc(3 * (300px + 40px))` }} // 3 items view
        >
          {items.map((item, index) => (
            <ImageBox translateValue={translateValue} key={index}>
              <Image>
                <img src={item.img} alt={item.name} />
              </Image>
              <p>
                {item.name}
                <br />
                {item.price}
              </p>
            </ImageBox>
          ))}
        </ImageContainer>
        <NextButton onClick={handleNextClick}>
          <img src="/images/icon/Next.png" alt="Next" />
        </NextButton>
      </ContentBox>
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
          img: "/images/img/아메리카노_ice.png",
          name: "아메리카노(Ice)",
          price: "1,500원",
        },
        {
          img: "/images/img/카라멜마키아토_ice.png",
          name: "카라멜마키아토",
          price: "3,500원",
        },
        {
          img: "/images/img/에스프레소폰파나.png",
          name: "에스프레소폰파나",
          price: "4,800원",
        },
        {
          img: "/images/img/딸기_글레이즈드_크림_프라푸치노.png",
          name: "딸기 글레이즈드 크림 프라푸치노",
          price: "4,600원",
        },
        {
          img: "/images/img/민트_콜드_브루.png",
          name: "민트 콜드브루",
          price: "3,800원",
        },
      ],
    },
    Drink: {
      title: "Drink",
      items: [
        {
          img: "/images/img/슬래머.png",
          name: "슬래머",
          price: "4,000원",
        },
        {
          img: "/images/img/콜드폼_딸기_라떼.png",
          name: "콜드 폼 딸기라떼",
          price: "5,000원",
        },
        {
          img: "/images/img/우유.png",
          name: "우유",
          price: "2,500원",
        },
      ],
    },
    Dessert: {
      title: "Dessert",
      items: [
        {
          img: "/images/img/바스크_초코_치즈_케이크.png",
          name: "바스크 초코 치즈케이크",
          price: "3,500원",
        },
        {
          img: "/images/img/초콜릿_생크림_케이크.png",
          name: "초콜릿 생크림 케이크",
          price: "7,000원",
        },
        {
          img: "/images/img/당근_현무암_케이크.png",
          name: "당근_현무암_케이크",
          price: "8,000원",
        },
      ],
    },
    Cookie: {
      title: "Cookie",
      items: [
        {
          img: "/images/img/초코스모어쿠키.png",
          name: "초코스모어쿠키",
          price: "1,200원",
        },
        {
          img: "/images/img/말차스모어쿠키.png",
          name: "말차스모어쿠키",
          price: "1,300원",
        },
        {
          img: "/images/img/마카다미아쿠키.png",
          name: "마카다미아쿠키",
          price: "1,200원",
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
