import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1440px;
  height: 760px;
  margin: auto;
  border: 1px solid gray;
`;

export function TopDownAction() {
  const [playingGame, setPlayingGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/testProject.loader.js",
      dataUrl: "Build/testProject.data",
      frameworkUrl: "Build/testProject.framework.js",
      codeUrl: "Build/testProject.wasm",
    });

  function handleGameOver(userName, score) {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, []);
  return (
    <>
      <button onClick={() => setPlayingGame(true)}>StartGame</button>
      <button
        onClick={() =>
          sendMessage(
            "CafeDecorator",
            "OpenPopup",
            JSON.stringify({
              tilemap: tilemap,
              tiles: tiles,
            })
          )
        }
      >
        Attack
      </button>
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
      {isGameOver && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )}
    </>
  );
}
