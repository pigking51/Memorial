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
  myRecipe,
  showSomeoneLike,
  deleteMyFuniture,
  callFurniture,
  showSearchSomeone,
  getRandomRecipe,
} from "./api";
import "./TopDownAction.css"; // CSS 파일 import
import { json, useNavigate } from "react-router-dom";

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
  const [yourName, setYourName] = useState("Guest");
  // 좋아요 관련
  const [likeScore, setLikeScore] = useState(0);
  const [isSendLike, setIsSendLike] = useState(false);
  const [savedLike, setSavedLike] = useState(10);
  const [randomId, setRandomId] = useState("notYet");
  // 게임데이터 관련
  const [jsonPart, setJsonPart] = useState(null);
  const [isSavedGame, setIsSavedGame] = useState(false);
  const [sendUnity, setSendUnity] = useState("null");
  const [sendUnity2, setSendUnity2] = useState("null");
  const [sendUnity3, setSendUnity3] = useState([]);
  const [signal, setSignal] = useState("null");
  // 가구 삭제관련
  const [delJson, setDelJson] = useState([]);
  const [oldFurniture, setOldFurniture] = useState([]);
  // 랜덤유저 방문 관련
  const [randomUser, setRandomUser] = useState("null");
  const [sendRandom, setSendRandom] = useState("null");
  const [sendRandom2, setSendRandom2] = useState("null");
  const [sendRandom3, setSendRandom3] = useState([]);
  const [sendCallReady, setSendCallReady] = useState(false);
  const [randomFurniture, setRandomFurniture] = useState("null");
  // 내 화면 복귀 관련
  const [comeBackHome, setComeBackHome] = useState("null");
  // 로그인 유무 확인
  const [isGoToLogin, setIsGoToLogin] = useState(false);
  // 레시피 관련
  const [recipeSignal, setRecipeSignal] = useState(false);
  const [showRecipe, setShowRecipe] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [canSendData, setCanSendData] = useState(true);

  const navigate = useNavigate();

  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "Build/testProject.loader.js",
      dataUrl: "Build/testProject.data",
      frameworkUrl: "Build/testProject.framework.js",
      codeUrl: "Build/testProject.wasm",
    });

  function handleLike(likeScore) {
    setIsSendLike(true);
    setLikeScore(likeScore);
  }

  function handleJson(json) {
    console.log(json);
    console.log("작동되는지 확인");
    setIsSavedGame(false);
    setJsonPart(json);
  }

  useEffect(() => {
    nowUserInfo();
  }, []);

  async function nowUserInfo() {
    if (sessionStorage.length !== 0) {
      try {
        const userResponse = await getNowUser();
        const URData = userResponse.data.data.userId;
        setYourName(URData);
        console.log(URData);
      } catch (error) {
        console.log("로그인 오류", error);
      }
    }
  }
  // 최초 게임 실행 시 랜덤 레시피 부여
  async function getInitialRecipe() {
    if (yourName != "Guest") {
      try {
        const MYRResponse = await myRecipe(yourName);
        console.log(MYRResponse.data);
        if (MYRResponse.data.length == 0) {
          const response = await initialRecipe(yourName);
          console.log(`${yourName}에게 랜덤 레시피 부여`);
        }
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

        if (jsonPart != null && isSavedGame == false) {
          const StJsonPart = JSON.parse(jsonPart);
          console.log(StJsonPart);
          console.log(StJsonPart.furniture);

          const data = {
            userId: yourName,
            wallObject: StJsonPart.wall,
            tileObject: StJsonPart.floor,
            furniture: StJsonPart.furniture,
          };

          console.log(data);
          if (sessionStorage.length !== 0) {
            const response = await fetchGameData(yourName, data);
            console.log(response);
            setIsSavedGame(true);
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
  // 처음 게임 시작 시 받았던 좋아요 숫자 표시
  useEffect(() => {
    sendMessage(`Like Button`, `LoadUserLikes`, savedLike);
  }, [savedLike]);
  async function getSomeoneLike() {
    try {
      const response = await showSomeoneLike(yourName);
      console.log(response.data);
    } catch (error) {
      console.log("좋아요 갯수 호출 실패");
    }
  }
  useEffect(() => {
    getSomeoneLike();
  }, [unityProvider, yourName]);

  // 좋아요 저장

  useEffect(() => {
    saveLikeScore();
  }, [likeScore]);

  async function saveLikeScore() {
    // if (playingGame && randomId == "notYet") {
    //   window.alert("자추금지!!!!!");
    //   return;
    // }
    if (isSendLike != false) {
      try {
        console.log(likeScore);
        console.log(yourName);
        console.log(randomId);
        const data = {
          userId: randomId,
          likedUser: yourName,
        };
        const response = await saveLike(data);
        console.log(response.data);
        const newRecipe = await getRandomRecipe(yourName, randomId);
        setIsSendLike(false);
      } catch (error) {
        console.log("좋아요 저장 실패", error);
      }
    }
  }

  // 저장된 좋아요 불러오기(타인 카페 방문시에도 반응하게)

  useEffect(() => {
    showLikeScore();
  }, [unityProvider, randomId, savedLike]);

  async function showLikeScore() {
    if (randomId != "notYet") {
      try {
        const response = await showLike();
        const data = response.data;
        console.log(data);
        let count = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].user.userId === randomId) {
            count++;
          }
        }
        console.log(count);
        setSavedLike(count);
      } catch (error) {
        console.log("좋아요 호출 실패", error);
      }
    }
  }

  // 저장된 데이터 불러오기
  useEffect(() => {
    callMyGameData();
  }, []);

  async function callMyGameData() {
    try {
      if (sessionStorage.length !== 0) {
        const userResponse = await getNowUser();
        const URData = userResponse.data.data.userId;
        console.log(URData);
        setUserName(URData);
        const response = await getMyGameData(URData);
        const furResponse = await callFurniture(URData);
        console.log(response.data);
        if (response.data == null) {
          return;
        } else {
          console.log(response.data);
          console.log(response.data[0].tileObject);
          setSendUnity(response.data[0].tileObject);
          console.log(response.data[0].wallObject);
          setSendUnity2(response.data[0].wallObject);
          console.log(furResponse.data);
          setSendUnity3(furResponse.data);
          // 이전 가구를 oldFurniture에 저장
          setOldFurniture(furResponse.data);
        }
      }
    } catch (error) {
      console.log("게임데이터 로드 오류", error);
    }
  }

  const sendToken = useCallback(() => {
    sendMessage(`CafeDecorator`, `OldFloorData`, `${sendUnity}`);
    sendMessage(`CafeDecorator`, `OldWallData`, `${sendUnity2}`);
    sendMessage(`CafeDecorator`, `ReceiveUnity`, `${userName}`);
    sendUnity3.forEach((su) => {
      sendMessage(
        `FurnitureManager`,
        `LoadSelectFurniture`,
        su.furnitureObject
      );
      let arr = [su.siteX, su.siteY];
      sendMessage(
        `FurnitureManager`,
        `LoadPlaceFurniture`,
        JSON.stringify(arr)
      );
    });
  }, [unityProvider, sendMessage, sendUnity, sendUnity2, sendUnity3]);

  useEffect(() => {
    addEventListener(`LoadTileData`, sendToken);
    return () => {
      removeEventListener(`LoadTileData`, sendToken);
    };
  }, [unityProvider, sendToken, addEventListener, removeEventListener]);

  useEffect(() => {
    addEventListener("LikeScores", handleLike);
    return () => {
      removeEventListener("LikeScores", handleLike);
    };
  }, [unityProvider]);

  useEffect(() => {
    addEventListener("ShowJson", handleJson);
    updateGameData();
    return () => {
      removeEventListener("ShowJson", handleJson);
      updateGameData();
    };
  }, [jsonPart]);

  // 랜덤 유저정보 불러오기
  useEffect(() => {
    callRandomGameData();
    setSendCallReady(false);
  }, [signal]);

  async function callRandomGameData() {
    if (yourName != "Guest") {
      try {
        const response = await randomGameData(yourName);
        const data = response.data;
        console.log(data);
        setRandomUser(data.user.userId);
        setRandomId(data.user.userId);
        const furResponse = await callFurniture(data.user.userId);
        if (data.tileObject != null) {
          setSendRandom(data.tileObject);
        } else {
          setSendRandom("얕은바다");
        }
        if (data.wallObject != null) {
          setSendRandom2(data.wallObject);
        } else {
          setSendRandom2("붉은벽돌");
        }
        setSendRandom3(furResponse.data);
        console.log(sendRandom3);
        setSendCallReady(true);
      } catch (error) {
        console.log("랜덤게임데이터 출력실패", error);
      }
    }
  }

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
    VisitRandomCafe();
  }, [sendCallReady]);

  // 랜덤방문
  function VisitRandomCafe() {
    if (signal != "null" && sendCallReady == true) {
      console.log(sendRandom);
      console.log(sendRandom2);
      console.log(sendRandom3);
      const send = () => {
        sendMessage(`CafeDecorator`, `OldFloorData`, `${sendRandom}`);
        sendMessage(`CafeDecorator`, `OldWallData`, `${sendRandom2}`);
        sendMessage(`CafeDecorator`, `ReceiveUnity`, `${randomUser}`);
        oldFurniture.forEach((su) => {
          let arr = [su.furnitureObject, su.siteX, su.siteY];
          sendMessage(
            `FurnitureManager`,
            `RemoveFurnitureForVisit`,
            JSON.stringify(arr)
          );
        });

        sendRandom3.forEach((sr) => {
          sendMessage(
            `FurnitureManager`,
            `LoadSelectFurniture`,
            sr.furnitureObject
          );
          let arr = [sr.siteX, sr.siteY];
          sendMessage(
            `FurnitureManager`,
            `LoadPlaceFurniture`,
            JSON.stringify(arr)
          );
        });
      };
      send();
      setOldFurniture(sendRandom3);
      setRandomFurniture(sendRandom3);
      setSignal("null");
      setComeBackHome("null");
      setSendCallReady(false);
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
    try {
      const response = await getNowUser();
      const URData = response.data.data.userId;
      if (comeBackHome != "null" && randomUser != "null") {
        const send = () => {
          oldFurniture.forEach((su) => {
            let arr = [su.furnitureObject, su.siteX, su.siteY];
            sendMessage(
              `FurnitureManager`,
              `RemoveFurnitureForVisit`,
              JSON.stringify(arr)
            );
          });
          sendMessage(
            `CafeDecorator`,
            `OldFloorData`,
            sendUnity != "null" ? `${sendUnity}` : `얕은바다`
          );
          sendMessage(
            `CafeDecorator`,
            `OldWallData`,
            sendUnity2 != "null" ? `${sendUnity2}` : `붉은벽돌`
          );
          sendMessage(`CafeDecorator`, `ReceiveUnity`, `${userName}`);
          sendUnity3.forEach((su) => {
            sendMessage(
              `FurnitureManager`,
              `LoadSelectFurniture`,
              su.furnitureObject
            );
            let arr = [su.siteX, su.siteY];
            sendMessage(
              `FurnitureManager`,
              `LoadPlaceFurniture`,
              JSON.stringify(arr)
            );
          });
        };
        send();
        setOldFurniture(sendUnity3);
        setRandomId("notYet");
        setSignal("null");
        setComeBackHome("null");
      } else if (comeBackHome != "null" && randomUser == "null") {
        window.alert(`이미 홈 화면입니다!`);
        return;
      } else {
        console.log("홈 화면 복귀 실패");
      }
    } catch (error) {
      console.log("복귀 유효성 검사 실패", error);
    }
  }

  // 나의 레시피
  useEffect(() => {
    sendMyRecipeToGame();
  }, [yourName, comeBackHome]);

  async function sendMyRecipeToGame() {
    if (yourName != "Guest" && canSendData == true) {
      try {
        const response = await myRecipe(yourName);
        console.log(response.data);
        let recipeArr = [];
        for (let i = 0; i < response.data.length; i++) {
          recipeArr.push(response.data[i].recipe.recipeName);
        }
        console.log(recipeArr);
        setRecipe(recipeArr);
        setCanSendData(false);
      } catch (error) {
        console.log("나의 레시피 출력 실패!!", error);
      }
    } else {
      console.log("로그인을 안했거나 레시피 데이터 오류일 것임");
    }
  }

  function getMessage(message) {
    console.log(message);
    setRecipeSignal(true);
  }
  useEffect(() => {
    addEventListener(`CanSendMessage`, getMessage);
    return () => {
      removeEventListener(`CanSendMessage`, getMessage);
    };
  }, [unityProvider]);

  function openRecipe(sign) {
    console.log(sign);
    setShowRecipe(sign);
  }

  useEffect(() => {
    addEventListener(`ShowRecipe`, openRecipe);
    return () => {
      removeEventListener(`ShowRecipe`, openRecipe);
    };
  }, [unityProvider]);

  useEffect(() => {
    sendRecipe();
  }, [showRecipe]);

  function sendRecipe() {
    console.log(recipe);
    if (canSendData == false && recipe.length != 0) {
      console.log(recipe);
      const UnityRecipe = JSON.stringify(recipe);
      const send = () => {
        sendMessage(`EventSystem`, `LoadMyRecipe`, `${UnityRecipe}`);
      };
      send();
      console.log("전송완료");
      setShowRecipe(null);
      setCanSendData(true);
      setRecipeSignal(false);
    }
  }

  // 가구삭제
  useEffect(() => {
    addEventListener(`ShowDelJson`, delData);
    return () => {
      removeEventListener(`ShowDelJson`, delData);
    };
  }, []);

  function delData(json) {
    console.log(json);
    setDelJson(json);
  }

  useEffect(() => {
    deleteFurniture();
  }, [delJson]);

  async function deleteFurniture() {
    if (delJson != null && yourName != "Guest") {
      try {
        const jsonDel = JSON.parse(delJson);
        console.log(jsonDel);
        const data = {
          furnitureObject: jsonDel.furnitureObject,
          siteX: jsonDel.siteX,
          siteY: jsonDel.siteY,
        };
        const response = await deleteMyFuniture(data, yourName);
        console.log("삭제성공");
      } catch (error) {
        console.log("데이터삭제 실패", error);
      }
    }
  }

  // 게임관련 함수 끝

  // 게임 시작 버튼 클릭시 로그인이 되어있지 않았다면 로그인 화면으로 이동
  function isLogined() {
    console.log(`여기까진 인식`);
    if (sessionStorage.length == 0) {
      window.alert(
        `게임을 즐기시려면 로그인을 해야합니다!!! \n로그인 화면으로 이동합니다.`
      );
      navigate(`/login`);
    } else {
      console.log(`게임하는데 이상없음!!!`);
    }
  }

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
            isLogined();
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
