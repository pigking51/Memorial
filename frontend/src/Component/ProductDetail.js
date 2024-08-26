import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  padding-top: 120px;
`;

export function ProductDetail() {
  const { id } = useParams();
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}> 내용확인용{id}</h1>
      </Container>
    </>
  );
}
