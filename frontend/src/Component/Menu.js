import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { getMenuData } from "./api";
import { useNavigate } from "react-router-dom";

const NotLoading = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;
const Opps = styled.img`
  position: relative;
  height: 500px;
  width: 500px;
  animation: rotate_image 30s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

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
    font-weight: bold;
    border: 1px solid #e38ca6;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e38ca6;
    background-color: #fff;
    margin: 100px 0;
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
  cursor: pointer;
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
  border: 10px solid #db365a;
  /* background-color: #fde9f3; */
  border-radius: 30px;
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
  margin-top: 100px;
  background: linear-gradient(50deg, #bc93f9, #eb92ae);
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
  const [visible, setVisible] = useState([]);
  const [translateValue, setTranslateValue] = useState("8th-New-Menu");
  const [menuContents, setMenuContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset translateValue when the visible menu changes
    setTranslateValue(0);
  }, [visible]);

  useEffect(() => {
    showMenuData();
  }, []);

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

  async function showMenuData() {
    try {
      const response = await getMenuData();
      const data = response.data;
      let i = 0;
      const allMenu_arr = [];
      const newMenu_arr = [];
      const coffee_arr = [];
      const drink_arr = [];
      const dessert_arr = [];
      const cookie_arr = [];
      for (i = 0; i < data.length; i++) {
        if (data[i].menuTitle == "8th-New-Menu") {
          newMenu_arr.push(data[i]);
        } else if (data[i].menuTitle == "Coffee") {
          coffee_arr.push(data[i]);
        } else if (data[i].menuTitle == "Drink") {
          drink_arr.push(data[i]);
        } else if (data[i].menuTitle == "Dessert") {
          dessert_arr.push(data[i]);
        } else if (data[i].menuTitle == "Cookie") {
          cookie_arr.push(data[i]);
        }
      }
      // 기본상태는 첫번째 매뉴가 보여야됨
      const p_newMenuJson = JSON.stringify(newMenu_arr);
      const newMenuJson = JSON.parse(p_newMenuJson);
      console.log(newMenuJson);
      setVisible(newMenuJson);

      allMenu_arr.push(newMenu_arr);
      allMenu_arr.push(coffee_arr);
      allMenu_arr.push(drink_arr);
      allMenu_arr.push(dessert_arr);
      allMenu_arr.push(cookie_arr);

      console.log(allMenu_arr);
      const p_allMenuJson = JSON.stringify(allMenu_arr);
      const allMenuJson = JSON.parse(p_allMenuJson);
      console.log(allMenuJson);
      console.log(allMenuJson[0].menuTitle);
      setMenuContents(allMenuJson);

      // 데이터 로딩전 오류발생 방지코드
      setIsLoading(true);
      console.log(menuContents && menuContents);
    } catch (error) {
      console.log("메뉴 데이터 출력 오류", error);
    }
  }
  function nowItems(prop) {
    console.log(prop);
    console.log(prop[0].menuTitle);
  }

  const renderContent = (items) => (
    <>
      {/* <SubTitle>
        <p>{!isLoading ? `8th-New-Menu` : `${items[0].menuTitle}`}</p>
      </SubTitle> */}
      <BtContentTitle>
        <p>{!isLoading ? `8th-New-Menu` : `${items[0].menuTitle}`}</p>
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
            <ImageBox
              onClick={() => navigate(`${item.menuId}`)}
              translateValue={translateValue}
              key={index}
            >
              <Image>
                <img src={item.img} alt={item.menuName} />
              </Image>
              <p>
                {item.menuName}
                <br />
                {`${item.price}원`}
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

  return (
    <>
      {visible.length == 0 ? (
        <NotLoading>
          <Opps src="./images/logo/memorialLogo.png" />
        </NotLoading>
      ) : (
        <Container>
          <Content>
            <Banner>
              <h1>Special Offer</h1>
              <p>Up to 50% off on selected items</p>
            </Banner>
            <BackGroundImage>
              <img src="/images/bg/bg1.png" alt="Background" />
            </BackGroundImage>
            <Text>{/* <p>Menu</p> */}</Text>
            <MenuChoice>
              {menuContents &&
                menuContents.map((key, index) => (
                  <li key={key.menuTitle} onClick={() => setVisible(key)}>
                    {key[index].menuTitle}
                  </li>
                ))}
            </MenuChoice>
            {renderContent(visible)}
          </Content>
        </Container>
      )}
    </>
  );
}
