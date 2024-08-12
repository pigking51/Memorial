import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 3px; */
  span {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export function NavItem({ name }) {
  return (
    <>
      <Container>
        <span>{name}</span>
      </Container>
    </>
  );
}
