import axios from "axios";
import { useEffect, useState } from "react";

// 로그인
export function userLogin(data) {
  const url = `http://localhost:8080/api/authenticate`;

  return axios.post(url, data);
}

let chanBear = "";

let headers = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${
      sessionStorage.length != 0 ? sessionStorage.getItem("JWT-token") : ""
    }`,
  },
};

// 현재 로그인한 유저정보
export function getNowUser() {
  const url = `http://localhost:8080/user/current`;

  if (sessionStorage.length != 0) {
    console.log(sessionStorage.getItem("JWT-token"));
    chanBear = sessionStorage.getItem("JWT-token");
    headers = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${chanBear}`,
      },
    };
  }

  return axios.get(url, headers);
}
// 전체 유저정보
export function showAllUser() {
  const url = `http://localhost:8080/user/show`;

  return axios.get(url, headers);
}
export function showAllLectures() {
  const url = "http://localhost:8080/lectures/getalllectures";

  return axios.get(url);

  // 헤더에 뭘 붙이는 작업이었는데 까먹음(필요는 없음)
  // headers: { "Access-Control-Allow-Origin": "*" },
}

export function getLectureDetailById(id) {
  // let resultLecture = "";
  const url = `http://localhost:8080/lectures/getalllectures/${id}`;
  // try {
  //   const response = await axios.get(url);
  //   console.log("데이터", response.data);
  //   resultLecture = response;
  // } catch (error) {
  //   console.log("아이디 찾는 중 오류발생", error);
  // }
  // return resultLecture;

  return axios.get(url, headers);
}

// 회원가입 관련 api
export function userRegister(data) {
  const url = `http://localhost:8080/user/signup`;
  return axios.post(url, data);
}

// 마이페이지 관련 api
export function getMyLecture(id) {
  const url = `http://localhost:8080/api/products/subscribe/${id}`;
  console.log(headers);
  return axios.get(url, headers);
}

// 인기강의
export function getLectureTop4() {
  const url = `http://localhost:8080/api/products/subscribe/top4`;
  return axios.get(url, headers);
}

// 회원정보 수정
export function modifyData(id, data) {
  const url = `http://localhost:8080/user/modify/${id}`;
  return axios.patch(url, data, headers);
}

// 주식정보
export function showStock() {
  const API_KEY =
    "Bbw%2BKP6%2Bcl7za25F0EmakNrwYPJ%2FectOS5l7qDNt6AFKqEs2peyJUombGy4yhUNZ3Fz3chTfRzkVPNeNgEcjVg%3D%3D";

  const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${API_KEY}&resultType=json&numOfRows=5&likeItmsNm=신`;

  return axios.get(url);
}

// 강의 구독하기
export function saveLecture(data) {
  const url = `http://localhost:8080/api/products/subscribe`;

  return axios.post(url, data, headers);
}

// 로그아웃
export function userLogout() {
  // const url = `http://localhost:8080/user/logout`;
  // console.log(headers);
  sessionStorage.removeItem("JWT-token");
  window.location.reload();
  // return axios.post(url, {}, headers);
}

// 게임정보 저장
export function fetchGameData(id, data) {
  const url = `http://localhost:8080/game/update/${id}`;

  return axios.patch(url, data, headers);
}

// 게임정보 불러오기
export function getMyGameData(id) {
  const url = `http://localhost:8080/game/getmydata/${id}`;
  console.log(id);

  return axios.get(url, headers);
}

// 모든 게임 데이터 불러오기
export function allGameData() {
  const url = `http://localhost:8080/game/showall`;

  return axios.get(url, headers);
}

// 랜덤 게임 데이터 불러오기
export function randomGameData() {
  const url = `http://localhost:8080/game/randomvisit`;

  return axios.get(url, headers);
}

// 특정 게임 데이터 불러오기
export function someGameData(id) {
  const url = `http://localhost:8080/game/visit/${id}`;

  return axios.get(url, headers);
}

// 메뉴정보 불러오기
export function getMenuData() {
  const url = `http://localhost:8080/menu/getallmenu`;

  return axios.get(url, headers);
}

// 창업문의 저장
export function saveInquery(data) {
  const url = `http://localhost:8080/inquery/save`;
  return axios.post(url, data, headers);
}
