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
    Authorization:
      // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
      // "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwZXBlIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE3MjMxNzQ2ODR9.p8ALBrsIUmE0WgZoFp-QOdNtI9gwdWIbhLQ0I3H7zNnPs5QopdCLpdc9zp9n37i85SYUOcBmEy1G4DYGwfsRAw",
      // `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwZXBlIiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE3MjMxNzQ2ODR9.p8ALBrsIUmE0WgZoFp-QOdNtI9gwdWIbhLQ0I3H7zNnPs5QopdCLpdc9zp9n37i85SYUOcBmEy1G4DYGwfsRAw`,
      // // `Bearer ${isSession ? sessionStorage.getItem("JWT-token") : ""}`,
      `Bearer ${
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

// 마이페이지 관련 api
export function getMyLecture(id) {
  const url = `http://localhost:8080/products/purchase/${id}`;

  return axios.get(url, headers);
}

// 로그아웃
export function userLogout() {
  // const url = `http://localhost:8080/user/logout`;
  // console.log(headers);
  sessionStorage.removeItem("JWT-token");
  window.location.reload();
  // return axios.post(url, {}, headers);
}
