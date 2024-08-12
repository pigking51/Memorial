import styled from "styled-components";
import "./Franchise_Inquiry.css";

const Title = styled.div`
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  margin: 125px 0;
  text-align: center;
`;
const Container = styled.div`
  width: 60%;
  margin: 0 20% 100px;
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
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  input {
    height: 50px;
    width: 500px;
    padding: 0 20px;
  }
`;
const Phone = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
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
const Email = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const EmailInput = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
const Store = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const Radio = styled.div`
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
  /* margin-right: 20px; */
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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const AddressInfo = styled.div`
  display: flex;
  align-items: center;
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
    margin-right: 20px;
    background-color: #8c8c8c;
    color: #fff;
    border-radius: 4px;
    border: none;
  }
  button:active {
    opacity: 0.85;
  }
`;
const Etc = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const EtcWrite = styled.div``;
const InfoAgree = styled.div`
  width: 100%;
  height: auto;
`;
const InfoAgree1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const InfoAgree1Container = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0;
`;
const InfoAgree2Container = styled.div`
  width: 800px;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
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

export function Franchise_Inquiry() {
  return (
    <>
      <Title>창업문의를 남겨주시면 상세하게 설명드리겠습니다.</Title>

      <Container>
        <Brand>
          <p>
            <span></span>
          </p>
          <select>
            <option name="빽다방" id="1" value="빽다방">
              빽다방
            </option>
            <option name="빽다방" id="1" value="스타벅스">
              스타벅스
            </option>
            <option name="빽다방" id="1" value="엔젤인어스">
              엔젤인어스
            </option>
          </select>
        </Brand>

        <Name>
          <p>
            이름<span>*</span>
          </p>
          <input type="text" placeholder="이름" />
        </Name>
        <Phone>
          <p>
            전화번호<span>*</span>
          </p>
          <PhoneNumber>
            <select>
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
              <option name="017" id="017" value="016">
                016
              </option>
            </select>
            <p>-</p>
            <input type="tel" />
            <p>-</p>
            <input type="tel" />
          </PhoneNumber>
        </Phone>
        <Email>
          <p>
            이메일<span>*</span>
          </p>
          <EmailInput>
            <input type="email" />
            <p>@</p>
            <input type="email" />

            <select>
              <option name="g-mail" id="1" value="g-mail">
                @gmail.com
              </option>
              <option name="naver" id="2" value="naver">
                @naver.com
              </option>
              <option name="hanmail" id="3" value="hanmail">
                @hanmail.net
              </option>
              <option name="yahoo" id="4" value="yahoo">
                @yahoo.co.kr
              </option>
            </select>
          </EmailInput>
        </Email>

        <Store>
          <p>
            희망지역점포<span>*</span>
          </p>
          <Radio>
            <Yes>
              <label for="Yes">있음</label>
              <input type="radio" value="Yes" name="agree" id="Yes" />
            </Yes>
            <No>
              <label for="No">없음</label>
              <input type="radio" value="No" name="agree" id="No" />
            </No>
          </Radio>
        </Store>

        <Address>
          <p>
            주소<span>*</span>
          </p>
          <AddressInfo>
            <button>우편번호찾기</button>
            <input type="text" />
          </AddressInfo>
        </Address>

        <Etc>
          <p>
            추가정보입력<span>*</span>
          </p>
          <EtcWrite>
            <textarea
              cols="100"
              rows="5"
              placeholder="점포를 보유하셨거나 입점희망 점포에 대한 사전정보가 있을 경우, 점포의 평수/임대료 등 구체적인 정보를 남겨주시면 조금 더 정확한 상담이 가능합니다."
            ></textarea>
            <p>
              현재 <span>0</span>/ 최대200byte (한글100자,영문200자)
            </p>
          </EtcWrite>
        </Etc>
        <InfoAgree>
          <InfoAgree1>
            <p>
              개인정보 보호를 위한 이용자 동의서<span>*</span>
            </p>
            <InfoAgree1Container>
              <button>상세보기</button>
              <label for="A_Yes" id="YesLabel">
                동의합니다.
              </label>
              <input type="radio" value="Yes" name="agree" id="A_Yes" />
              <label for="A_No" id="NoLabel">
                동의하지 않습니다.
              </label>
              <input type="radio" value="No" name="agree" id="A_No" />
            </InfoAgree1Container>
          </InfoAgree1>
        </InfoAgree>
        <InfoAgree2>
          <p>
            마케팅 활용 동의서(선택)<span>*</span>
          </p>
          <InfoAgree2Container>
            <button>상세보기</button>
            <label for="B_Yes" id="YesLabel">
              동의합니다.
            </label>
            <input type="radio" value="Yes" name="agree" id="B_Yes" />
            <label for="B_No" id="NoLabel">
              동의하지 않습니다.
            </label>
            <input type="radio" value="No" name="agree" id="B_No" />
          </InfoAgree2Container>
        </InfoAgree2>
      </Container>
    </>
  );
}
