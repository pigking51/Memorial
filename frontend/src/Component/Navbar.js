import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
import { userLogout } from "./api";
import "./TopDownAction.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 5px;
  transition: 0.5s;
  &:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 100px;
    /* margin-left: 50px; */
    cursor: pointer;
  }
  &:hover {
    color: #db365a;
  }
`;
const Logout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: #333;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #db365a;
  }
`;
function allowScroll() {
  document.body.classList.remove("no-scroll");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function Navbar() {
  function isLogin() {
    if (sessionStorage.length == 0) {
      if (window.confirm(`로그인 해 주세요!`)) {
        window.location.href = `Login`;
      } else {
        window.location.reload();
      }
    }
  }
  return (
    <>
      <Container>
        <StyledLink
          onClick={() => {
            allowScroll();
            scrollToTop(true);
          }}
          to="/"
        >
          {/* <img src="/images/logo/logo.png" alt="상단로고" /> */}
          <img
            src="/images/logo/memorial_text.png"
            width="147"
            height="18"
            alt="상단로고"
          />
        </StyledLink>
        <StyledLink
          onClick={() => {
            allowScroll();
            scrollToTop(true);
          }}
          to="/intro"
        >
          <NavItem name="INTRO"></NavItem>
        </StyledLink>
        <StyledLink
          onClick={() => {
            allowScroll();
            scrollToTop(true);
          }}
          to="/menu"
        >
          <NavItem name="MENU"></NavItem>
        </StyledLink>
        <StyledLink
          onClick={() => {
            allowScroll();
            scrollToTop(true);
          }}
          to="/lecture"
        >
          <NavItem name="LECTURE"></NavItem>
        </StyledLink>
        <StyledLink
          onClick={() => {
            allowScroll();
            scrollToTop(true);
          }}
          to="/franchise_Inquiry"
        >
          <NavItem name="FRANCHISE"></NavItem>
        </StyledLink>
        <StyledLink to="/FAQ">
          <NavItem name="FAQ"></NavItem>
        </StyledLink>
        <StyledLink
          onClick={() => {
            allowScroll();
            isLogin();
            scrollToTop(true);
          }}
          to="/mypage"
        >
          <NavItem name="MYPAGE"></NavItem>
        </StyledLink>

        {sessionStorage.length != 0 ? (
          <Logout onClick={userLogout}>
            <span>LOGOUT</span>
          </Logout>
        ) : (
          <StyledLink to="/login">
            <NavItem name="LOGIN"></NavItem>
          </StyledLink>
        )}
      </Container>
    </>
  );
}
