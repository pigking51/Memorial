import { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import {
  getNowUser,
  fetchGameData,
  getMyGameData,
  randomGameData,
} from "./api";
import "./TopDownAction.css"; // CSS 파일 import

const Container = styled.div`
  width: 1440px;
  height: 760px;
  margin: auto;
  border: 2px solid linear-gradient(50deg, #bc93f9, #eb92ae);
  animation: gradient 4s ease infinite;
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

const StartButton = styled.button`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb92ae;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(219, 54, 90, 0.9);
  font-weight: 400;
  text-align: center;
  font-size: 40px;
  margin: 50px 0;
  border-radius: 60px;
  border-top: 3px solid #eb92ae;
  border-right: 3px solid #fde9f3;
  border-bottom: 3px solid #db365a;
  border-left: 3px solid #fcd3e6;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

const BtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  align-items: center;
`;
export function TopDownAction() {
  // 게임관련 함수
  const [playingGame, setPlayingGame] = useState(false);
  const [userName, setUserName] = useState("unknown");
  const [likeScore, setLikeScore] = useState(0);
  const [jsonPart, setJsonPart] = useState();
  const [yourName, setYourName] = useState("Guest");
  const [sendUnity, setSendUnity] = useState("null");
  const [sendUnity2, setSendUnity2] = useState("null");
  const [signal, setSignal] = useState("null");
  const [randomUser, setRandomUser] = useState("null");
  const [sendRandom, setSendRandom] = useState("null");
  const [sendRandom2, setSendRandom2] = useState("null");

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/testProject.loader.js",
      dataUrl: "Build/testProject.data",
      frameworkUrl: "Build/testProject.framework.js",
      codeUrl: "Build/testProject.wasm",
    });

  function handleLike(likeScore) {
    setLikeScore(likeScore);
  }
  function handleJson(json) {
    console.log(json);
    console.log("작동되는지 확인");
    setJsonPart(json);
  }
  async function nowUserInfo() {
    if (sessionStorage.length !== 0) {
      const userResponse = await getNowUser();
      const URData = userResponse.data.data.userId;
      setYourName(URData);
      console.log(URData);
    }
  }
  // 게임데이터 저장
  async function updateGameData() {
    console.log(jsonPart);

    if (jsonPart != null) {
      const StJsonPart = JSON.parse(jsonPart);
      console.log(StJsonPart);
      const data = {
        userId: yourName,
        wallObject: StJsonPart.wall,
        tileObject: StJsonPart.floor,
        furnitureObject: StJsonPart.furniture,
      };
      console.log(data);
      if (sessionStorage.length !== 0) {
        const response = await fetchGameData(yourName, data);
        console.log(response);
      }
    }
  }
  // 저장된 데이터 불러오기
  async function callMyGameData() {
    try {
      if (sessionStorage.length !== 0) {
        const userResponse = await getNowUser();
        const URData = userResponse.data.data.userId;
        console.log(URData);
        setUserName(URData);
        const response = await getMyGameData(URData);
        console.log(response.data);
        if (response.data == null) {
          return;
        } else {
          console.log(response.data);
          console.log(response.data[0].tileObject);
          setSendUnity(response.data[0].tileObject);
          console.log(response.data[0].wallObject);
          setSendUnity2(response.data[0].wallObject);
        }
      }
    } catch (error) {
      console.log("게임데이터 로드 오류", error);
    }
  }

  const sendToken = useCallback(() => {
    sendMessage(`CafeDecorator`, `OldFloorData`, `${sendUnity}`);
    sendMessage(`CafeDecorator`, `OldWallData`, `${sendUnity2}`);
    sendMessage(`CafeDecorator`, `ReceiveUnity`, `${userName}님 환영합니다!!!`);
  }, [sendMessage, sendUnity, sendUnity2]);

  useEffect(() => {
    addEventListener(`LoadTileData`, sendToken);
    return () => {
      removeEventListener(`LoadTileData`, sendToken);
    };
  }, [unityProvider, sendToken, addEventListener, removeEventListener]);

  async function callRandomGameData() {
    try {
      const response = await randomGameData();
      const data = response.data;
      console.log(data);
      if (data.tileObject != null) {
        setSendRandom(data.tileObject);
      } else {
        setSendRandom("에메랄드빛바다");
      }
      if (data.wallObject != null) {
        setSendRandom2(data.wallObject);
      } else {
        setSendRandom2("붉은벽돌");
      }
      setRandomUser(data.user.userId);
    } catch (error) {
      console.log("랜덤게임데이터 출력실패", error);
    }
  }

  useEffect(() => {
    addEventListener("LikeScores", handleLike);
    return () => {
      removeEventListener("LikeScores", handleLike);
    };
  }, []);

  useEffect(() => {
    addEventListener("ShowJson", handleJson);
    updateGameData();
    return () => {
      removeEventListener("ShowJson", handleJson);
      updateGameData();
    };
  });

  useEffect(() => {
    callMyGameData();
  }, [updateGameData]);

  useEffect(() => {
    nowUserInfo();
  }, []);

  function random(randomBtn) {
    console.log(randomBtn);
    setSignal(randomBtn);
  }

  useEffect(() => {
    addEventListener(`VisitRandom`, random);
    return () => {
      removeEventListener(`VisitRandom`, random);
    };
  });

  useEffect(() => {
    callRandomGameData();
  }, [nowUserInfo, signal]);

  // 랜덤방문
  if (signal != "null") {
    console.log(sendRandom);
    console.log(sendRandom2);
    const send = () => {
      sendMessage(`CafeDecorator`, `OldFloorData`, `${sendRandom}`);
      sendMessage(`CafeDecorator`, `OldWallData`, `${sendRandom2}`);
      sendMessage(
        `CafeDecorator`,
        `ReceiveUnity`,
        `${randomUser}님의 카페에 오신 것을 환영합니다!!!`
      );
    };
    send();
    setSignal("null");
  } else {
    console.log("랜덤방문 실패");
  }

  // 게임관련 함수 끝

  // 화면 스크롤
  function scrollToMiddle() {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });

    document.body.classList.add("no-scroll");
  }

  return (
    <>
      <BtContainer>
        <StartButton
          onClick={() => {
            setPlayingGame(true);
            scrollToMiddle();
          }}
        >
          ✨ Game Start ✨
        </StartButton>
        {playingGame && (
          <p>{`${userName}! You've scored ${likeScore} points.`}</p>
        )}
      </BtContainer>
      <Container>
        {playingGame ? (
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Container>
    </>
  );
}
