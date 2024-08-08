import styled from "styled-components";

const ConFooter = styled.div`
  width: 100%;
  background-color: #333;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
  padding: 0;
`;
const information = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  h4 {
    color: #fff;
    font-size: 25px;
    width: auto;
    height: 100px;
    line-height: 100px;
  }
  span {
    color: #fff;
    height: 100px;
    width: auto;
  }
`;

export function Footer() {
  return (
    <>
      <ConFooter>
        <div className="information">
          <h4>Memorial</h4>
          <span>© 2024 MEMORIAL. All rights reserved.</span>
        </div>
      </ConFooter>
    </>
  );
}

<footer>
  <div className="information">
    <h4>Memorial</h4>
    <span>© 2024 MEMORIAL. All rights reserved.</span>
  </div>
</footer>;
