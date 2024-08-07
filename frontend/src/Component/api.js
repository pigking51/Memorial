import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

// 현재 로그인한 유저정보
export function getNowUser() {
  const url = `http://localhost:8080/user/current`;

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
