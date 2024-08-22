import "./MainPage.css";
import "./Modal.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Index } from "./Index";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { Education } from "./Education";
import { Franchise_Inquiry } from "./Franchise_Inquiry";
import { Login } from "./Login";
import { Lecture } from "./Lecture";
import { LectureWrapper } from "./LectureWrapper";
import { FAQ } from "./FAQ";
import { Mypage } from "./Mypage";
import { Footer } from "./Footer";
import { SignUp } from "./SignUp";
import { Streaming } from "./Streaming";
import { StreamingWrapper } from "./StreamingWrapper";

const Container = styled.div`
  width: 100vw;
  justify-content: center;
`;
const Section = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ContentBox = styled.div`
  width: 100%;
  /* margin-top: 30px; */
`;

export function MainPage() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            src="
        https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.min.js
        "
          ></script>
          <Section>
            <Nav>
              <Navbar />
            </Nav>
            <ContentBox>
              <Routes>
                <Route path="/index" element={<Index />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/lecture" element={<LectureWrapper />}>
                  <Route index element={<Education />} />
                  <Route index path=":id" element={<Lecture />} />
                </Route>
                <Route path="/streaming" element={<StreamingWrapper />}>
                  <Route path=":id" element={<Streaming />} />
                </Route>
                <Route
                  path="/franchise_Inquiry"
                  element={<Franchise_Inquiry />}
                />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
              </Routes>
            </ContentBox>
          </Section>
          {/* 푸터 html 시작  */}
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}
