import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 300px;
  background-color: #333;
  position: absolute;
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
  margin-top: 50px;
  text-align: center;
  color: white;
  flex-direction: column;
`;

export function Footer() {
  return (
    <>
      <Container>
        <BtTitle>Memorial</BtTitle>
        <SubTitle>Memory, Participation, and Communication.</SubTitle>
        <BtContainer>
          <p>ⓒ2024 MEMORIAL. All rights reserved.</p>
          <br />
          <form>
            <select>
              <option>🐷 백엔드 / 최강건아 최건</option>
              <option>🐭 유니티 / 도재호 </option>
              <option>🐵 디자인 / 이승빈</option>
              <option>👀 프론트엔드 / 김준회</option>
            </select>
          </form>
        </BtContainer>
      </Container>
    </>
  );
}
