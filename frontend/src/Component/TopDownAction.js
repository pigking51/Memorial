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
      <button onClick={() => setPlayingGame(true)}>StartGame</button>
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
      {playingGame && (
        <p>{`${userName}! You've scored ${likeScore} points.`}</p>
      )}
    </>
  );
}
