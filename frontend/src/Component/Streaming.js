import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getLectureDetailById } from "./api";

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eb92ae;
  justify-content: space-between;
  background-color: white;
  span {
    width: 700px;
    height: 100px;
    line-height: 100px;
    font-size: 25px;
    font-family: "GmarketSansMedium";
  }
`;
const Left = styled.div``;
const Back = styled.a`
  float: left;
  width: 200px;
  height: 100px;
  img {
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-top: 20px;
  }
  &:hover {
    opacity: 0.5;
  }
`;
const LectureTitle = styled.span``;
const Hamburger = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 30px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const ShowVideo = styled.div`
  #my-video {
    width: 100%;
    height: 100%;
  }
`;
const SlideMenu = styled.div`
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: #fff;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 20px 20px;
  transition: all 2s linear;
`;
const CloseSideMenu = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  background-color: #fff;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    float: right;
    cursor: pointer;
    margin-right: 20px;
    margin-top: 20px;
    font-weight: bold;
    background-color: none;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 50px;
      width: 50px;
      margin-top: 60px;
      margin-right: 30px;
    }
  }
`;
const Navi = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  width: 100%;
  height: auto;
  li {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    font-family: "GmarketSansMedium";
    &:hover {
      opacity: 0.6;
    }
  }
`;
const StyledLink = styled(Link)`
  color: #eb92ae;
  text-decoration: none;
`;
const Video = styled.div`
  height: 50%;
  width: 50%;
  margin: 50px auto 5% auto;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #000;
`;

const Console = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #212121;
  justify-content: space-between;
`;
const UpDown = styled.div`
  display: flex;
  height: 100px;
  width: 800px;
`;
const Prev = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
const Next = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

const BackImg = styled.div`
  width: 100%;
  height: 100vh; // 뷰포트 높이에 맞춰 이미지의 높이를 설정
  position: fixed; // 고정된 위치로 설정
  top: 0;
  left: 0;
  z-index: -1; // 다른 요소들보다 뒤에 배치
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; // 배경 이미지를 컨테이너에 맞게 조정
  background-repeat: no-repeat; // 이미지 반복 방지
  background-position: center; // 이미지의 위치를 가운데로 설정
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 160px;
    height: 160px;
  }
`;

export function Streaming() {
  const { id } = useParams();
  const [lectureData, setLectureData] = useState();
  const [isNone, setIsNone] = useState("none");
  const navigate = useNavigate();
  useEffect(() => {
    showLectureVideo();
  }, []);

  async function showLectureVideo() {
    try {
      const response = await getLectureDetailById(parseInt(id, 10));
      const data = response.data;
      console.log(data);
      setLectureData(data);
    } catch (error) {
      console.log("해당 컨텐츠 출력 오류", error);
    }
  }
  function showSlide() {
    setIsNone("block");
  }
  function hideSlide() {
    setIsNone("none");
  }

  return (
    <>
      <script src="../js/streaming.js" defer type="text/javascript"></script>
      <link
        href="https://vjs.zencdn.net/8.10.0/video-js.css"
        rel="stylesheet"
      />
      <Container>
        <Top>
          <Left>
            <Back onClick={() => navigate(-1)}>
              <img src="/images/icon/back.png" alt="뒤로가기" />
            </Back>
            {lectureData && (
              <LectureTitle>{lectureData.lectureTitle}</LectureTitle>
            )}
          </Left>
          <Hamburger onClick={showSlide}>
            <a>
              <img src="/images/icon/menu.png" alt="메뉴" />
            </a>
          </Hamburger>
        </Top>
        <SlideMenu style={{ display: isNone }}>
          <CloseSideMenu>
            <a onClick={hideSlide}>
              <img src="/images/icon/close_rectangle.png" />
            </a>
          </CloseSideMenu>
          <Navi>
            <li>
              <StyledLink to="/home">HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="/intro">INTRO</StyledLink>
            </li>
            <li>
              <StyledLink to="/menu">MENU</StyledLink>
            </li>
            <li>
              <StyledLink to="/lecture">LECTURE</StyledLink>
            </li>
            <li>
              <StyledLink to="/franchise_Inquery">FRANCHISE</StyledLink>
            </li>
            <li>
              <StyledLink to="/faq">FAQ</StyledLink>
            </li>
            <li>
              <StyledLink to="/mypage">MYPAGE</StyledLink>
            </li>
            <Logo>
              <img src="/images/logo/memorialLogo.png" />
            </Logo>
          </Navi>
        </SlideMenu>
        <Video>
          <Contents>
            <ShowVideo>
              {lectureData && (
                <video
                  id="my-video"
                  class="video-js"
                  controls
                  preload="auto"
                  poster={`${lectureData.image}`}
                  data-setup="{}"
                >
                  <source src={`${lectureData.lectureUrl}`} type="video/mp4" />
                  <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider
                    upgrading to a web browser that
                    <a
                      href="https://videojs.com/html5-video-support/"
                      target="_blank"
                    >
                      supports HTML5 video
                    </a>
                  </p>
                </video>
              )}
            </ShowVideo>
          </Contents>
          <Console>
            <UpDown>
              <Prev>
                <img src="/images/icon/first_page.png" alt="이전" />
                이전강의
              </Prev>
              <Next>
                <img src="/images/icon/last_page.png" alt="다음" />
                다음강의
              </Next>
            </UpDown>
          </Console>
        </Video>
      </Container>
      <BackImg>
        <img src="/images/etc/webBackground.png" alt="info" />
      </BackImg>
    </>
  );
}
