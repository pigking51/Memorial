import styled from "styled-components";

const Container = styled.div`
  /* border-top: 2px solid black; */
  padding-top: 20px;
  width: 100%;
  height: 300px;
  background-color: #333;
`;
const BtTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin: 50px 0 0 0;
  color: white;
`;
const SubTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: white;
`;
const BtContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  text-align: center;
  color: white;
`;

export function Footer() {
  return (
    <>
      <Container>
        <BtTitle>Memorial</BtTitle>
        <SubTitle>Memory, Participation, and Communication.</SubTitle>
        <BtContainer>
          <p>ⓒ2024 MEMORIAL. All rights reserved.</p>
          <input type="text" placeholder="패밀리사이트 바로가기" />
        </BtContainer>
      </Container>
    </>
  );
}
