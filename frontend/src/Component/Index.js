import styled from "styled-components";
import { useEffect } from "react";
import { TopDownAction } from "./TopDownAction";

const Title = styled.div`
  width: 100%;
  height: 700px;
`;

export function Index() {
  return (
    <>
      <Title>
        <h1 data-text="black mirror">
          <span>black mirror</span>
        </h1>
      </Title>
    </>
  );
}
