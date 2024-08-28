import { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import { getNowUser, fetchGameData, getMyGameData } from "./api";
import "./TopDownAction.css"; // CSS 파일 import

const Container = styled.div`
  width: 1440px;
  height: 760px;
  margin: auto;
  border: 2px solid #e38ca6;
`;

const StartButton = styled.button`
  width: 400px;
  height: 100px;
  color: #fff;
  font-size: xx-large;
  background-color: #eb92ae;
  border-top: 2px solid #eb92ae;
  border: 3px solid #fcd3e6;
  border-bottom: 6px solid #db365a;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
  margin: 150px 0;
`;

const BtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  align-items: center;
`;

export function TopDownAction() {
  const [playingGame, setPlayingGame] = useState(false);
  const [userName, setUserName] = useState("unknown");
  const [likeScore, setLikeScore] = useState(0);
  const [jsonPart, setJsonPart] = useState();
  const [yourName, setYourName] = useState("Guest");
  const [sendUnity, setSendUnity] = useState("null");
  const [sendUnity2, setSendUnity2] = useState("null");

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

  const sendToken = useCallback(() => {
    sendMessage(`CafeDecorator`, `OldFloorData`, `${sendUnity}`);
    sendMessage(`CafeDecorator`, `OldWallData`, `${sendUnity2}`);
    sendMessage(
      `CafeDecorator`,
      `ReceiveUnity`,
      `${userName && userName}님 환영합니다!!!`
    );
  }, [sendMessage, sendUnity, sendUnity2]);

  useEffect(() => {
    addEventListener(`LoadTileData`, sendToken);
    return () => {
      removeEventListener(`LoadTileData`, sendToken);
    };
  }, [unityProvider, sendToken, addEventListener, removeEventListener]);

  function scrollToMiddle() {
    // 화면을 스크롤
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
