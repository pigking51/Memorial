import styled from "styled-components";

const Container = styled.div`
  border-top: 2px solid black;
  width: 100%;
  height: 300px;
`;
const BtTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin: 50px 0 0 0;
`;
const SubTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
const BtContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
`;

export function Footer() {
  return (
    <>
      <Container>
        <BtTitle>THESTAR</BtTitle>
        <SubTitle>ORIGINAL KOREAN TASTE</SubTitle>
        <BtContainer>
          <p>COPYRIGHTⓒ2018 THESTAR KOREA INC.ALL RIGHTS RESERVED</p>
          <input type="text" placeholder="패밀리사이트 바로가기" />
        </BtContainer>
      </Container>
    </>
  );
}
