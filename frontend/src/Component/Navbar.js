import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
import { userLogout } from "./api";

const Container = styled.div`
  width: 60%;
  display: flex;
  background-color: dodgerblue;
  position: relative;
  gap: 56px;
  margin: 0 auto;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;
  background-color: dodgerblue;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
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
  console.log(sessionStorage.length);
  return (
    <>
      <Container>
        <StyledLink to="/">
          {/* <img src="/images/logo/logo.png" alt="상단로고" /> */}
          <img
            src="/images/logo/Memorial.png"
            width="80"
            height="80"
            alt="상단로고"
          />
        </StyledLink>
        <StyledLink to="/intro">
          <NavItem icon="ti ti-home" name="INTRO"></NavItem>
        </StyledLink>
        <StyledLink to="/menu">
          <NavItem icon="ti ti-menu" name="MENU"></NavItem>
        </StyledLink>
        <StyledLink to="/lecture">
          <NavItem icon="ti ti-device-tv" name="LECTURE"></NavItem>
        </StyledLink>
        <StyledLink to="/franchise_Inquiry">
          <NavItem icon="ti ti-building" name="FRANCHISE"></NavItem>
        </StyledLink>
        <StyledLink to="/FAQ">
          <NavItem icon="ti ti-question" name="FAQ"></NavItem>
        </StyledLink>
        <StyledLink to="/mypage">
          <NavItem icon="ti ti-user" name="MYPAGE"></NavItem>
        </StyledLink>

        {sessionStorage.length != 0 ? (
          <Logout onClick={userLogout}>
            <span>LOGOUT</span>
          </Logout>
        ) : (
          <StyledLink to="/login">
            <NavItem icon="ti ti-login" name="LOGIN"></NavItem>
          </StyledLink>
        )}
      </Container>
    </>
  );
}
