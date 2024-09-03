import styled from "styled-components";
import { useEffect, useState } from "react";
import { TopDownAction } from "./TopDownAction";
import { Footer } from "./Footer";

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  background: linear-gradient(50deg, #bc93f9, #eb92ae);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
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
`;

const Greetings = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px 0;

  span {
    color: #333;
    font-size: 50px;
    font-weight: 400;
  }
  strong {
    -webkit-animation: textAnim 5s ease-out infinite;
    animation: textAnim 5s ease-out infinite; /* standard for other browsers */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 250% 500%;
    -webkit-background-clip: text;
    background-clip: text; /* standard for other browsers */
    -webkit-text-fill-color: transparent;
  }
  @keyframes textAnim {
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
`;

const Button = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  background-color: none;
  border: none;
  cursor: pointer;
  top: ${(props) => (props.isCentered ? "85%" : "50%")};
  right: ${(props) => (props.isCentered ? "5%" : "50%")};
  transform: ${(props) =>
    props.isCentered ? "translateX(0)" : "translateX(50%)"};
  transition: top 0.3s, right 0.3s, transform 0.3s;
  display: ${(props) =>
    props.show ? "block" : "none"}; // 버튼 보이기/숨기기 제어

  img {
    width: 60px;
    height: 60px;
  }
`;

const Unicon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const GameScreen = styled.div`
  margin: 50px 0;
`;

export function Home() {
  const [isCentered, setIsCentered] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [buttonImage, setButtonImage] = useState("/images/icon/DownButton.png");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsCentered(false);
  }

  function centerScreen() {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
    setIsCentered(true);
  }

  function handleGameStart() {
    setGameStarted(true); // 게임 시작 상태를 true로 설정
    centerScreen(); // 버튼 위치를 화면 중앙으로 이동
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonImage("/images/icon/TopButton.png");
      } else {
        setButtonImage("/images/icon/DownButton.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ImageWrap>
        <Background>
          <img src="/images/banner/titleBanner_1.png" alt="Title Image" />
        </Background>
      </ImageWrap>
      <Greetings>
        <span>
          {" "}
          어서오세요, <strong>MEMORIAL</strong>입니다!{" "}
        </span>
        <Button
          isCentered={isCentered}
          show={gameStarted}
          onClick={() => {
            if (isCentered) {
              scrollToTop();
            } else {
              centerScreen();
            }
          }}
        >
          <img src={buttonImage} alt="Toggle Button" />
        </Button>
      </Greetings>
      <GameScreen id="game-screen">
        <TopDownAction onStartGame={handleGameStart} />
      </GameScreen>
    </>
  );
}
