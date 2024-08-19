import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1440px;
  height: 760px;
  margin: auto;
  border: 2px solid #e38ca6;
`;

const StartButton = styled.button`
  width: 200px;
  height: 50px;
  color: #e38ca6;
  background-color: #f3e1eb;
  border: 2px solid #e38ca6;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
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

  useEffect(() => {
    addEventListener("LikeScores", handleLike);
    return () => {
      removeEventListener("LikeScores", handleLike);
    };
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
      <BtContainer>
        <StartButton onClick={() => setPlayingGame(true)}>
          StartGame
        </StartButton>
        {playingGame && (
          <p>{`${userName}! You've scored ${likeScore} points.`}</p>
        )}
      </BtContainer>
    </>
  );
}
