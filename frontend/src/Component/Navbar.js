import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
import { userLogout } from "./api";

const Container = styled.div`
  width: 60%;
  display: flex;
  position: relative;
  gap: 56px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
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
  color: white;
  padding: 5px;
  background-color: dodgerblue;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
  }
`;

export function Navbar() {
  return (
    <>
      <Container>
        <StyledLink to="/">
          {/* <img src="/images/logo/logo.png" alt="상단로고" /> */}
          <img
            src="/images/logo/memorial_text.png"
            width="147"
            height="18"
            alt="상단로고"
          />
        </StyledLink>
        <StyledLink to="/intro">
          <NavItem name="INTRO"></NavItem>
        </StyledLink>
        <StyledLink to="/menu">
          <NavItem name="MENU"></NavItem>
        </StyledLink>
        <StyledLink to="/lecture">
          <NavItem name="LECTURE"></NavItem>
        </StyledLink>
        <StyledLink to="/franchise_Inquiry">
          <NavItem name="FRANCHISE"></NavItem>
        </StyledLink>
        <StyledLink to="/FAQ">
          <NavItem name="FAQ"></NavItem>
        </StyledLink>
        <StyledLink to="/mypage">
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
