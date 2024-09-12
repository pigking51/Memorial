import styled from "styled-components";
import "./Franchise_Inquiry.css";
import { useEffect, useRef, useState } from "react";
import { getNowUser, saveInquery } from "./api";

const Title = styled.div`
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  margin: 125px 0;
  text-align: center;
`;
const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 20% 100px;
  span {
    color: red;
  }
`;

const Brand = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  select {
    height: 50px;
    width: 500px;
    padding: 0 20px;
  }
  option {
    font-size: 20px;
    height: 50px;
  }
`;
const Name = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
  input {
    height: 70px;
    width: 500px;
  }
`;
const Name2 = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  /* margin: 20px 0; */
  background-color: white;
  input {
    height: 50px;
    width: 500px;
    padding: 20px;
  }
`;

const Namewrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Phone = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;
const PhoneNumber = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px 0 20px;
  /* margin: 20px 0; */
  background-color: white;
  select {
    height: 50px;
    width: 100px;
    padding: 0 20px;
  }
  p {
    margin: 0 10px;
  }
  input {
    height: 50px;
    width: 250px;
    padding: 0 20px;
  }
`;
const Phonewrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Startup = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;
const StartupInput = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  input {
    height: 50px;
    width: 250px;
    padding: 0 20px;
  }
  p {
    margin: 0 10px;
  }
  select {
    height: 50px;
    width: 250px;
    padding: 0 20px;
    /* margin-left: 20px; */
  }
`;
const Startupwrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Email = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;
const EmailInput = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  input {
    height: 50px;
    width: 250px;
    padding: 0 20px;
  }
  p {
    margin: 0 10px;
  }
  select {
    height: 50px;
    width: 250px;
    padding: 0 20px;
    margin-left: 20px;
  }
`;
const Emailwrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Store = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;
const Stroewrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Radio = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  display: flex;
`;

const Yes = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  label {
    margin-right: 10px;
  }
  input {
    width: 20px;
    height: 20px;
  }
`;
const No = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 10px;
  }
  input {
    width: 20px;
    height: 20px;
  }
`;

const Address = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;
const AddressInfo = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  input {
    height: 50px;
    width: 500px;
    padding: 0 20px;
  }
  button {
    height: 50px;
    width: 100px;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    background-color: #8c8c8c;
    color: #fff;
    border-radius: 4px;
    border: none;
  }
  button:active {
    opacity: 0.85;
  }
`;

const Addresswrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Etc = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
`;
const EtcWrite = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  p {
    margin-left: 50px;
  }
  textarea {
    resize: none;
  }
`;

const Etcwrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const InfoAgree1 = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;

const InfoAgree1Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  button {
    height: 50px;
    width: 100px;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #8c8c8c;
    color: #8c8c8c;
  }
  button:active {
    opacity: 0.85;
  }
`;

const InfoAgree2 = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fde9f3;
  border-bottom: 2px #666;
`;

const InfoAgree2Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  button {
    height: 50px;
    width: 100px;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #8c8c8c;
    color: #8c8c8c;
  }
  button:active {
    opacity: 0.85;
  }
`;

const InfoAgreewrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Banner = styled.div`
  margin-top: 100px;
  background: linear-gradient(45deg, #bc93f9, #eb92ae);
  background-size: 400% 400%;
  animation: gradient 4s ease infinite;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1 {
    font-size: 50px;
    margin: 0;
  }
  p {
    font-size: 30px;
    margin: 0;
  }
`;
const Ad = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;
const AdInfo = styled.div`
  /* margin-top: 100px; */
  height: 120px;
  width: 80%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: xx-large;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
  }

  span {
    color: red;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;

const Info = styled.div`
  margin-top: 50px;
  background-color: black;
  color: white;
`;

const UnderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 50px 0 50px;
  button {
    font-size: large;
    height: 60px;
    width: 200px;
    margin-right: 20px;
    background-color: #eb92ae;
    border-radius: 30px;
    border: 1px solid white;
    color: white;
  }
  button:active {
    opacity: 0.85;
  }
`;

const BackImg = styled.div`
  width: 100%;
  height: 100vh; // 뷰포트 높이에 맞춰 이미지의 높이를 설정
  position: fixed; // 고정된 위치로 설정
  top: 0;
  left: 0;
  z-index: -1; // 다른 요소들보다 뒤에 배치
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; // 배경 이미지를 컨테이너에 맞게 조정
  background-repeat: no-repeat; // 이미지 반복 방지
  background-position: center; // 이미지의 위치를 가운데로 설정
`;

export function Franchise_Inquiry() {
  const phoneRef = useRef();
  // 이름 담기
  const [userName, setUserName] = useState("이름안썼음");
  // 전화번호 담기
  const [pNum1, setpNum1] = useState("010");
  const [pNum2, setpNum2] = useState(0);
  const [pNum3, setpNum3] = useState(0);
  const [SPNum, setSPNum] = useState(0);
  // Email 담기
  const [EInput1, setEInput1] = useState("");
  const [EInput2, setEInput2] = useState("@gmail.com");
  const [EInput3, setEInput3] = useState("");
  const [SEInput, setSEInput] = useState("");
  const SelEmail = document.querySelector(".selEmail");
  // 창업 가능 시기 담기
  const [Savailable, setAvailable] = useState("always");
  // 희망지역점포 담기
  const [Swish, setWish] = useState("empty");
  // 주소 담기
  const [Saddress, setAddress] = useState("왜 안적었어");
  // 추가정보입력 담기
  const [SETC, setETC] = useState(0);
  // 이용자 동의서 담기
  const [pAgree, setPAgree] = useState();
  const [mAgree, setMAgree] = useState();

  useEffect(() => {
    sumPNum();
  }, [addPNum1, addPNum2, addPNum3]);

  useEffect(() => {
    sumEmail();
  }, [addEmail1, addEmail2, addEmail3]);

  // 이름 담는 함수
  function inputName(prof) {
    console.log(prof.target.value);
    setUserName(prof.target.value);
    console.log(userName && userName);
  }
  // 전화번호 담는 함수
  function addPNum1(prof) {
    console.log(prof.target.value);
    setpNum1(prof.target.value);
    console.log(pNum1 && pNum1);
  }
  function addPNum2(prof) {
    console.log(prof.target.value);
    setpNum2(prof.target.value);
    console.log(pNum2 && pNum2);
  }
  function addPNum3(prof) {
    console.log(prof.target.value);
    setpNum3(prof.target.value);
    console.log(pNum3 && pNum3);
  }
  function sumPNum() {
    setSPNum(pNum1 + pNum2 + pNum3);
    console.log(SPNum);
  }
  // Email 담는 함수
  function addEmail1(prof) {
    console.log(prof.target.value);
    setEInput1(prof.target.value);
  }
  function addEmail2(prof) {
    if (EInput3 != "") {
      return;
    }
    SelEmail.options[4].selected = true;
    console.log(prof.target.value);
    setEInput2(`@${prof.target.value}`);
  }
  function addEmail3(prof) {
    if (EInput2 != "") {
      return;
    }
    console.log(prof.target.value);
    setEInput3(`@${prof.target.value}`);
  }
  function sumEmail() {
    setSEInput(EInput1 + EInput2 + EInput3);
    console.log(SEInput);
  }
  // 창업 가능 시기 함수
  function inputAvailable(prof) {
    console.log(prof.target.value);
    setAvailable(prof.target.value);
  }
  // 희망지역점포 함수
  function inputWish(prof) {
    console.log(prof.target.value);
    setWish(prof.target.value);
  }
  // 주소 함수
  function inputAddress(prof) {
    console.log(prof.target.value);
    setAddress(prof.target.value);
  }
  // 추가정보입력 함수
  function inputETC(prof) {
    console.log(prof.target.value);
    setETC(prof.target.value);
  }
  // 이용자 동의서 함수
  function inputPAgree(prof) {
    console.log(prof.target.value);
    setPAgree(prof.target.value);
  }
  function inputMAgree(prof) {
    console.log(prof.target.value);
    setMAgree(prof.target.value);
  }
  // 입력내용 저장
  async function savedata() {
    try {
      const currentResponse = await getNowUser();
      const CRUserId = currentResponse.data.data.userId;
      console.log(CRUserId);
      const data = {
        userId: CRUserId,
        uname: userName,
        phoneNum: SPNum,
        email: SEInput,
        available: Savailable,
        wish: Swish,
        address: Saddress,
        etc: SETC,
        priAgree: pAgree,
        marAgree: mAgree,
      };

      console.log(data);
      const response = await saveInquery(data);
      const Rdata = response.data;
      if (window.confirm("문의완료!")) {
        // window.location.reload();
      }
    } catch (error) {
      console.log("문의저장 오류", error);
      window.confirm("문의저장 오류!");
    }
  }

  return (
    <>
      <Banner>
        <h1>Franchise</h1>
        <p>창업문의</p>
      </Banner>
      <Ad>
        <AdInfo>
          <h2>
            프랜차이즈(가맹점) & 개인카페 컨설팅 ‘<span>선착순 20팀</span>’ 로고
            및 브랜딩 비용 <span>100% 본사 지원</span>
          </h2>
        </AdInfo>
      </Ad>
      <Ad>
        <img src="/images/etc/franchisePageInfo.png" alt="info" />
      </Ad>
      <Title>정보입력</Title>
      <>
        <Container>
          <hr />
          <Namewrap>
            <Name>
              <p>
                이름<span>*</span>
              </p>
            </Name>
            <Name2>
              <input
                type="text"
                placeholder="이름"
                onChange={(e) => inputName(e)}
              />
            </Name2>
          </Namewrap>
          <hr />
          <Phonewrap>
            <Phone>
              <p>
                전화번호<span>*</span>
              </p>
            </Phone>
            <PhoneNumber>
              <select rel={phoneRef} onChange={(e) => addPNum1(e)}>
                <option name="010" id="010" value="010">
                  010
                </option>
                <option name="011" id="011" value="011">
                  011
                </option>
                <option name="012" id="012" value="012">
                  012
                </option>
                <option name="013" id="013" value="013">
                  013
                </option>
                <option name="014" id="014" value="014">
                  014
                </option>
                <option name="015" id="015" value="015">
                  015
                </option>
                <option name="016" id="016" value="016">
                  016
                </option>
                <option name="017" id="017" value="017">
                  017
                </option>
              </select>
              <p> - </p>
              <input type="tel" onChange={(e) => addPNum2(e)} />
              <p> - </p>
              <input type="tel" onChange={(e) => addPNum3(e)} />
            </PhoneNumber>
          </Phonewrap>
          <hr />
          <Emailwrap>
            <Email>
              <p>
                이메일<span>*</span>
              </p>
            </Email>
            <EmailInput>
              <input type="email" onChange={(e) => addEmail1(e)} />
              <p>@</p>
              <input type="email" onChange={(e) => addEmail2(e)} />
              <select className="selEmail" onChange={(e) => addEmail3(e)}>
                <option name="g-mail" id="1" value="gmail.com">
                  @gmail.com
                </option>
                <option name="naver" id="2" value="naver.com">
                  @naver.com
                </option>
                <option name="hanmail" id="3" value="hanmail.net">
                  @hanmail.net
                </option>
                <option name="yahoo" id="4" value="yahoo.co.kr">
                  @yahoo.co.kr
                </option>
                <option name="self" id="5" value="self">
                  직접입력
                </option>
              </select>
            </EmailInput>
          </Emailwrap>
          <hr />
          <Startupwrap>
            <Startup>
              <p>
                창업 가능 시기<span>*</span>
              </p>
            </Startup>
            <StartupInput>
              <select onChange={(e) => inputAvailable(e)}>
                <option name="always" id="1" value="always">
                  즉시
                </option>
                <option name="3month" id="2" value="3month">
                  3개월
                </option>
                <option name="6month" id="3" value="6month">
                  6개월
                </option>
                <option name="AF1year" id="4" value="AF1year">
                  1년 이후
                </option>
              </select>
            </StartupInput>
          </Startupwrap>
          <hr />
          <Stroewrap>
            <Store>
              <p>
                희망지역점포<span>*</span>
              </p>
            </Store>
            <Radio>
              <Yes>
                <label for="Yes">있음</label>
                <input
                  type="radio"
                  value="Yes"
                  name="agree"
                  id="Yes"
                  onChange={(e) => inputWish(e)}
                />
              </Yes>
              <No>
                <label for="No">없음</label>
                <input
                  type="radio"
                  value="No"
                  name="agree"
                  id="No"
                  onChange={(e) => inputWish(e)}
                />
              </No>
            </Radio>
          </Stroewrap>
          <hr />
          <Addresswrap>
            <Address>
              <p>
                주소<span>*</span>
              </p>
            </Address>
            <AddressInfo>
              <input type="text" onChange={(e) => inputAddress(e)} />
              {/* <button>우편번호찾기</button> */}
            </AddressInfo>
          </Addresswrap>
          <hr />
          <Etcwrap>
            <Etc>
              <p>
                추가정보입력<span>*</span>
              </p>
            </Etc>
            <EtcWrite>
              <textarea
                cols="68"
                rows="10"
                placeholder="점포를 보유하셨거나 입점희망 점포에 대한 사전정보가 있을 경우, 점포의 평수/임대료 등 구체적인 정보를 남겨주시면 조금 더 정확한 상담이 가능합니다."
                onChange={(e) => inputETC(e)}
              ></textarea>
              <p>
                현재 <span>{SETC.length}</span> / 최대200byte
                <br />
                (한글100자,영문200자)
              </p>
            </EtcWrite>
          </Etcwrap>
          <hr />
          <InfoAgreewrap>
            <InfoAgree1>
              <p>
                개인정보 보호를 위한
                <br />
                이용자 동의서<span>*</span>
              </p>
            </InfoAgree1>
            <InfoAgree1Container>
              {/* <button>상세보기</button> */}
              <label for="A_Yes" id="YesLabel">
                동의합니다.
              </label>
              <input
                type="radio"
                value="Yes"
                name="A_agree"
                id="A_Yes"
                onChange={(e) => inputPAgree(e)}
              />
              <label for="A_No" id="NoLabel">
                동의하지 않습니다.
              </label>
              <input
                type="radio"
                value="No"
                name="A_agree"
                id="A_No"
                onChange={(e) => inputPAgree(e)}
              />
            </InfoAgree1Container>
          </InfoAgreewrap>
          <hr />
          <InfoAgreewrap>
            <InfoAgree2>
              <p>
                마케팅 활용 동의서 (선택)<span>*</span>
              </p>
            </InfoAgree2>
            <InfoAgree2Container>
              {/* <button>상세보기</button> */}
              <label for="B_Yes" id="YesLabel">
                동의합니다.
              </label>
              <input
                type="radio"
                value="Yes"
                name="B_agree"
                id="B_Yes"
                onChange={(e) => inputMAgree(e)}
              />
              <label for="B_No" id="NoLabel">
                동의하지 않습니다.
              </label>
              <input
                type="radio"
                value="No"
                name="B_agree"
                id="B_No"
                onChange={(e) => inputMAgree(e)}
              />
            </InfoAgree2Container>
          </InfoAgreewrap>
          <hr />

          <UnderBtn>
            <button onClick={() => savedata()}>등록하기</button>
            <button onClick={() => window.location.reload}>취소</button>
          </UnderBtn>
        </Container>
        <BackImg>
          <img src="/images/etc/webBackground.png" alt="info" />
        </BackImg>
      </>
    </>
  );
}
