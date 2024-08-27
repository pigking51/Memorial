import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getMenuData } from "./api";
import { useNavigate, useParams } from "react-router-dom";

// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: auto;
  margin: 100px 20%;
  padding: 25px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 45%;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Content = styled.div`
  width: 45%;
  height: 100%;
  hr {
    margin: 10px 0;
  }
`;

const ItemName = styled.p`
  width: 100%;
  padding: 0;
  p {
    margin: 0;
    font-size: 32px;
    color: #333;
    font-weight: bold;
  }
`;

const ItemDescription = styled.p``;

const ItemInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    width: 100%;
    list-style: none;
  }
  ul:first-child {
    border-right: 2px dashed #d9d9d9;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;

const Allergy = styled.div`
  height: 50px;
  background-color: #eb92ae;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border-radius: 4px;
  color: white;
`;
const Back = styled.div`
  position: relative;
  cursor: pointer;
`;

export function ProductDetail() {
  const { id } = useParams(); // URL에서 id 추출
  const [menu, setMenu] = useState(null); // 메뉴 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const navigate = useNavigate();

  useEffect(() => {
    Detailname();
  }, [id]); // id가 변경될 때마다 데이터 가져오기

  async function Detailname() {
    try {
      const response = await getMenuData(); // 전체 메뉴 데이터 가져오기
      const data = response.data; // 응답 데이터

      // id로 메뉴 데이터 필터링
      const filteredMenu = data.find(
        (item) => item.menuId === parseInt(id, 10)
      );

      // 상태 업데이트
      setMenu(filteredMenu || null);
    } catch (error) {
      console.log("데이터 로딩 오류:", error);
    } finally {
      setLoading(false); // 로딩 완료
    }
  }

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 상태 표시
  }

  return (
    <Container>
      {menu ? (
        <>
          <Back onClick={() => navigate(-1)}>
            <img src="/images/icon/Prev.png" alt="back"></img>
          </Back>
          <ImageWrapper>
            <Image src={menu.img} alt={menu.menuName} />
          </ImageWrapper>
          <Content>
            <ItemName>
              <p>{menu.menuName}</p>
            </ItemName>
            <hr />
            <ItemDescription>{menu.menuDescription}</ItemDescription>
            <hr />
            <ItemInformation>
              <p>제품 영양 정보</p>
            </ItemInformation>
            <hr />
            <ListContainer>
              <ul>
                <li>
                  1회 제공량 (kcal)<span>{menu.servingSize} g</span>
                </li>
                <li>
                  포화지방 (g)<span>{menu.saturatedFat} g</span>
                </li>
                <li>
                  단백질 (g)<span>{menu.protein} g</span>
                </li>
              </ul>
              <ul>
                <li>
                  나트륨 (mg)<span>{menu.sodium} mg</span>
                </li>
                <li>
                  당류 (g)<span>{menu.sugar} g</span>
                </li>
                <li>
                  카페인 (mg)<span>{menu.caffeine} mg</span>
                </li>
              </ul>
            </ListContainer>
            <hr />
            <Allergy>
              알레르기 유발 요인 : <p>{menu.allergy}</p>
            </Allergy>
          </Content>
        </>
      ) : (
        <div>해당 ID의 메뉴를 찾을 수 없습니다.</div> // 메뉴 데이터가 없을 때
      )}
    </Container>
  );
}
