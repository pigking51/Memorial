import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import { getNowUser, fetchGameData, getMyGameData } from "./api";

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
  const [userName, setUserName] = useState();
  const [likeScore, setLikeScore] = useState();
  const [jsonPart, setJsonPart] = useState();
  const [yourName, setYourName] = useState("Guest");

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/testProject.loader.js",
      dataUrl: "Build/testProject.data",
      frameworkUrl: "Build/testProject.framework.js",
      codeUrl: "Build/testProject.wasm",
    });

  function handleLike(userName, likeScore) {
    setUserName(userName);
    setLikeScore(likeScore);
  }
  function handleJson(json) {
    console.log(json);
    console.log("작동되는지 확인");
    setJsonPart(json);
  }
  async function nowUserInfo() {
    if (sessionStorage.length != 0) {
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
      if (sessionStorage.length != 0) {
        const response = await fetchGameData(yourName, data);
        console.log(response);
      }
    }
  }
  async function callMyGameData() {
    if (sessionStorage.length != 0) {
      const userResponse = await getNowUser();
      const URData = userResponse.data.data.userId;
      const response = await getMyGameData(URData);
      console.log(response.data);
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
  }, []);
  useEffect(() => {
    nowUserInfo();
  }, []);

  return (
    <>
      {/* <button
        onClick={() =>
          sendMessage(
            "CafeDecorator",
            "OpenPopup",
            JSON.stringify({
              // tilemap: tilemap,
              // tiles: tiles,
              })
              )
              }
              >
              Attack
              </button> */}
      <BtContainer>
        <StartButton onClick={() => setPlayingGame(true)}>
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
