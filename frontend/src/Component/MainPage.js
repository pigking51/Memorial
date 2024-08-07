import "./MainPage.css";
import "./Modal.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { Education } from "./Education";
import { Franchise_Inquiry } from "./Franchise_Inquiry";
import { Login } from "./Login";
import { Lecture } from "./Lecture";
import { LectureWrapper } from "./LectureWrapper";
import { FAQ } from "./FAQ";
import { Mypage } from "./Mypage";

const Container = styled.div`
  width: 100vw;
  justify-content: center;
`;
const Section = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  width: 100%;
  background-color: dodgerblue;
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
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/lecture" element={<LectureWrapper />}>
                  <Route index element={<Education />} />
                  <Route path=":id" element={<Lecture />} />
                </Route>
                <Route
                  path="/franchise_Inquiry"
                  element={<Franchise_Inquiry />}
                />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ContentBox>
          </Section>
          {/* 푸터 html 시작  */}

          <footer>
            <div className="information">
              <h4>Memorial</h4>
              <span>© 2024 MEMORIAL. All rights reserved.</span>
            </div>
          </footer>
        </Container>
      </BrowserRouter>
    </>
  );
}
