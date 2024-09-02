import { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
import {
  getNowUser,
  fetchGameData,
  getMyGameData,
  randomGameData,
  saveLike,
  showLike,
  initialRecipe,
  inviteMyCafe,
  checkMyMessage,
  checkMySendMessage,
} from "./api";
import "./TopDownAction.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 1316px;
  height: 740px;
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
export function TopDownAction({ onStartGame }) {
  // 게임관련 함수
  const [playingGame, setPlayingGame] = useState(false);
  const [userName, setUserName] = useState("unknown");
  const [likeScore, setLikeScore] = useState(0);
  const [isSendLike, setIsSendLike] = useState(false);
  const [savedLike, setSavedLike] = useState(0);
  const [jsonPart, setJsonPart] = useState(null);
  const [yourName, setYourName] = useState("Guest");
  const [sendUnity, setSendUnity] = useState("null");
  const [sendUnity2, setSendUnity2] = useState("null");
  const [signal, setSignal] = useState("null");
  // 랜덤유저 방문 관련
  const [randomUser, setRandomUser] = useState("null");
  const [sendRandom, setSendRandom] = useState("null");
  const [sendRandom2, setSendRandom2] = useState("null");
  // 내 화면 복귀 관련
  const [comeBackHome, setComeBackHome] = useState("null");
  // 로그인 유무 확인
  const [isGoToLogin, setIsGoToLogin] = useState(false);
  // 메시지 전송유무 확인
  const [isSendMessage, setIsSendMessage] = useState(false);

  const navigate = useNavigate();

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
  // 최초 게임 실행 시 랜덤 레시피 부여
  async function getInitialRecipe() {
    if (sessionStorage.length !== 0) {
      try {
        const response = await initialRecipe(yourName);
        console.log("랜덤 레시피 부여");
      } catch (error) {
        console.log("랜덤 레시피 부여 실패", error);
      }
    } else {
      console.log("로그인 안되어있음");
    }
  }

  useEffect(() => {
    getInitialRecipe();
  }, [yourName]);

  // 게임데이터 저장
  async function updateGameData() {
    if (sessionStorage.length !== 0) {
      try {
        console.log(jsonPart);

        if (jsonPart != null) {
          const StJsonPart = JSON.parse(jsonPart);
          console.log(StJsonPart);
          const data = {
            userId: yourName,
            wallObject: StJsonPart.wall,
            tileObject: StJsonPart.floor,
            // 아래 하드코딩한 것은 예시임!!
            // 해당 위치에 유니티에서 받은 가구 데이터를 배열로 담아줘야됨
            // (*유니티에서 배열채로 넘어온 경우 그냥 변수로 담기)
            furniture: [
              {
                furnitureObject: "가구1",
                siteX: 2.1,
                siteY: 1.3,
              },
              {
                furnitureObject: "가구2",
                siteX: 2.2,
                siteY: 1.0,
              },
              {
                furnitureObject: "가구3",
                siteX: 2.7,
                siteY: 1.7,
              },
              {
                furnitureObject: "가구4",
                siteX: 1.2,
                siteY: 2.0,
              },
              {
                furnitureObject: "가구5",
                siteX: 4.2,
                siteY: 0.0,
              },
            ],
          };

          console.log(data);
          if (sessionStorage.length !== 0) {
            const response = await fetchGameData(yourName, data);
            console.log(response);
            // const fResponse = await fetchFurnitureData();
          }
        }
      } catch (error) {
        console.log("게임 저장 or 업데이트 실패", error);
      }
    } else if (jsonPart != null && isGoToLogin == false) {
      if (
        window.confirm(`로그인이 필요한 서비스입니다. \n로그인하시겠습니까?`)
      ) {
        navigate(`/login`);
        setIsGoToLogin(true);
        return;
      }
    }
  }
  // // 좋아요 저장
  // async function saveLikeScore() {
  //   try {
  //     console.log(likeScore);
  //     console.log(yourName);
  //     const data = {
  //       userId: yourName,
  //       likedUser: yourName,
  //     };
  //     const response = await saveLike(data);
  //     console.log(response.data);
  //     setIsSendLike(false);
  //   } catch (error) {
  //     console.log("좋아요 저장 실패", error);
  //   }
  // }
  // // 저장된 좋아요 불러오기
  // async function showLikeScore() {
  //   try {
  //     const response = await showLike();
  //     const data = response.data;
  //     console.log(data);
  //     // setSavedLike();
  //     let i = 0;
  //     let count = 0;
  //     // for (i = 0; i < data.length; i++) {
  //     //   if (data[i].user.userId === yourName) {
  //     //     count++;
  //     //   }
  //     // }
  //     console.log(count);
  //   } catch (error) {
  //     console.log("좋아요 호출 실패", error);
  //   }
  // }
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
  }, [unityProvider, sendMessage, sendUnity, sendUnity2]);

  useEffect(() => {
    addEventListener(`LoadTileData`, sendToken);
    return () => {
      removeEventListener(`LoadTileData`, sendToken);
    };
  }, [unityProvider, sendToken, addEventListener, removeEventListener]);

  // useEffect(() => {
  //   saveLikeScore();
  // }, [unityProvider, yourName, isSendLike]);

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
  }, [unityProvider]);

  // useEffect(() => {
  //   showLikeScore();
  // }, [unityProvider, yourName]);

  useEffect(() => {
    console.log("앞은 됨??");
    sendMessage(`Like Button`, `CallLikeScore`, `100`);
    console.log("실행은 됨??");
  }, [unityProvider, likeScore]);

  useEffect(() => {
    addEventListener("ShowJson", handleJson);
    updateGameData();
    return () => {
      removeEventListener("ShowJson", handleJson);
      updateGameData();
    };
  }, [jsonPart]);

  useEffect(() => {
    callMyGameData();
  }, [unityProvider]);

  useEffect(() => {
    nowUserInfo();
  }, [unityProvider]);

  function random(randomBtn) {
    console.log(randomBtn);
    setSignal(randomBtn);
  }

  useEffect(() => {
    addEventListener(`VisitRandom`, random);
    return () => {
      removeEventListener(`VisitRandom`, random);
    };
  }, [unityProvider]);

  useEffect(() => {
    callRandomGameData(yourName);
  }, [unityProvider, nowUserInfo, yourName, signal]);

  useEffect(() => {
    VisitRandomCafe();
  }, [unityProvider, signal]);

  // 랜덤방문
  function VisitRandomCafe() {
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
  }

  // 타인카페 방문 후 내 화면으로 이동할때
  function myHome(Home) {
    console.log(Home);
    setComeBackHome(Home);
  }

  useEffect(() => {
    addEventListener(`ComeBackHome`, myHome);
    return () => {
      removeEventListener(`ComeBackHome`, myHome);
    };
  }, [unityProvider]);

  useEffect(() => {
    homeSick();
  }, [comeBackHome]);

  async function homeSick() {
    if (comeBackHome != "null") {
      console.log(sendRandom);
      console.log(sendRandom2);
      const send = () => {
        sendMessage(`CafeDecorator`, `OldFloorData`, `${sendUnity}`);
        sendMessage(`CafeDecorator`, `OldWallData`, `${sendUnity2}`);
        sendMessage(`CafeDecorator`, `ReceiveUnity`, `${userName}사장님`);
      };
      send();
      setComeBackHome("null");
    } else {
      console.log("내 카페 복귀 실패");
    }
  }

  // 초대 메세지 발송
  useEffect(() => {
    inviteMessage();
  }, [yourName]);

  async function inviteMessage() {
    if (yourName != "Guest" && isSendMessage != true) {
      try {
        const data = {
          sendUser: yourName,
          messageText: `넌 이미 죽어있다`,
          targetUser: `sampleID123`,
        };
        const response = await inviteMyCafe(data);
        console.log(response.data);
        setIsSendMessage(true);
      } catch (error) {
        console.log("메세지 전송 실패", error);
      }
    }
  }

  // 내가 보낸 메세지 확인하기
  async function mySendMessage() {
    if (yourName != "Guset") {
      try {
        const response = await checkMySendMessage(yourName);
        console.log(response.data);
      } catch (error) {
        console.log("보낸 메세지 확인 실패", error);
      }
    }
  }

  // 받은 메세지 확인하기
  useEffect(() => {
    myMessage();
  }, [inviteMessage]);

  async function myMessage() {
    if (yourName != "Guest") {
      try {
        const response = await checkMyMessage(yourName);
        console.log(response.data);
      } catch (error) {
        console.log("메세지 수신 실패", error);
      }
    }
  }

  // 게임관련 함수 끝

  // 화면 스크롤
  function scrollToMiddle() {
    window.scrollTo({
      top: 800,
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
            onStartGame(); // 게임 시작 시 콜백 호출
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
