import axios from "axios";
import { useState } from "react";

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
