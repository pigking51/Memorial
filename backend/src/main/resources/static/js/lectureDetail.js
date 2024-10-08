const url = "/lectures/getalllectures";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log("Lecture ID: ", id);

const urls = "/lectures/getalllectures/" + id;
const purchaseUrl = "/api/products/purchase/current";
let isUser = "";

// 모달 요소 선언
// jQ 선언
const $jQ = jQuery.noConflict();
// 기존 모달위치 선언
const firstwrap = document.querySelector(".alert");
// 모달 내용 변경
const cancletext = document.querySelector(".cancle-wrap").firstElementChild;
const xbtn = document.querySelector(".cancle-wrap").lastElementChild;
const modalcontentsSpan =
  document.querySelector(".modal-contents").firstElementChild;
const btnWrap = document.querySelector(".btn-wrap");

// 모달 속 확인 취소 기능 넣기
const yes = document.querySelector(".btn-wrap").firstElementChild;
const no = document.querySelector(".btn-wrap").lastElementChild;

yes.classList.add("yes");
no.classList.add("no");
xbtn.classList.add("closebtn");

function userOrNot() {
  axios
    .get("/user/current", { widthCredentials: true })
    .then((response) => {
      console.log("데이터: ", response.data);
      isUser = response.data.userId;
    })
    .catch((error) => {
      console.log("오류 발생: ", error);
      console.log("유저아님");
    });
}

axios
  .get(purchaseUrl)
  .then((response) => {
    console.log(response.data);
    response.data.forEach((edata) => {
      if (edata.lecture.lectureId == id) {
        document.querySelector(".cart-btn").classList.add("hidden");
        document.querySelector(".hidden").style.display = `none`;
        if (document.querySelector(".lecture-btn").style.display == `none`) {
          document.querySelector(".lecture-btn").style.display = `block`;
        }
      } else {
        document.querySelector(".lecture-btn").classList.add("hidden");
        document.querySelector(".hidden").style.display = `none`;
      }
    });
  })
  .catch((error) => {
    console.log("오류 발생: ", error);
    console.log("구매내역 확인불가");
  });

axios
  .get(urls)
  .then((response) => {
    console.log("데이터: ", response.data);
    displaylectureDetails(response.data);
  })
  .catch((error) => {
    console.log("오류 발생: ", error);
  });

function displaylectureDetails(data) {
  const contents = document.querySelector(".contents");

  // 태그 요소 생성
  const lecture = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("p");
  const lectureUrl = document.createElement("p");
  const major = document.createElement("p");
  const price = document.createElement("p");
  const text = document.createElement("p");
  const lowBox = document.createElement("div");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const cartBtn = document.createElement("button");
  const lectureBtn = document.createElement("button");
  // const comment = document.createElement("div");

  // 클래스 이름 생성
  lecture.classList.add("lecture");
  img.classList.add("image");
  lowBox.classList.add("low-box");
  cartBtn.classList.add("cart-btn");
  lectureBtn.classList.add("lecture-btn");
  // comment.classList.add("comment");

  // 태그 속성 추가
  img.src = data.image;
  title.textContent = "강좌명: " + data.lectureTitle;
  major.textContent = "전공: " + data.major;
  price.textContent = "가격: " + data.price;
  text.textContent = data.text;
  lecture.style.setProperty("box-shadow", "initial", "important");
  lecture.style.setProperty("transform", "initial", "important");
  lecture.style.setProperty("cursor", "initial", "important");
  cartBtn.textContent = "장바구니담기";
  lectureBtn.textContent = "강의 들으러 가기";

  // appendChild 자식위치 설정
  right.appendChild(cartBtn);
  right.appendChild(lectureBtn);
  left.appendChild(title);
  left.appendChild(major);
  left.appendChild(price);
  left.appendChild(text);
  lowBox.appendChild(left);
  lowBox.appendChild(right);
  lecture.appendChild(img);
  lecture.appendChild(lowBox);
  contents.appendChild(lecture);
  // contents.appendChild(comment);

  userOrNot();
  if (isUser == "") {
    document.querySelector(".lecture-btn").classList.add("hidden");
    document.querySelector(".hidden").style.display = `none`;
  }

  document.querySelector(".cart-btn").addEventListener("click", () => {
    setlecture(data);
    lecturePurchase();
  });

  document.querySelector(".lecture-btn").addEventListener("click", () => {
    window.location.href = `streaming.html?user=${isUser}&id=${id}`;
  });
}

function setlecture(data) {
  axios
    .get("/user/current", { widthCredentials: true })
    .then((response) => {
      console.log("데이터: ", response.data);
      if (response.status == 200) {
        const userId = response.data.userId;
        let cartItems = JSON.parse(localStorage.getItem(userId));
        if (!cartItems) {
          cartItems = [];
        }
        cartItems.push(data);
        localStorage.setItem(userId, JSON.stringify(cartItems));
      }
    })
    .catch((error) => {
      console.log("오류 발생: ", error);
      pleaseLogin();
    });
}

// 리뷰 댓글 입력 및 리뷰 달기

// 구매완료??
function lecturePurchase() {
  cancletext.textContent = "구매완료";
  modalcontentsSpan.textContent = "구매완료 장바구니로 가시겠습니까?";
  $jQ(".alert").addClass("active");
  $jQ(".closebtn").click(function () {
    $jQ(".alert").removeClass("active");
  });
  $jQ(".yes").click(function () {
    window.location.href = "cart.html";
  });
  $jQ(".no").click(function () {
    window.location.href = "lecture.html";
  });
}

// 로그인 안내
function pleaseLogin() {
  cancletext.textContent = "로그인 오류";
  modalcontentsSpan.textContent = "로그인해주세요!!";
  $jQ(".alert").addClass("active");
  $jQ(".closebtn").click(function () {
    $jQ(".alert").removeClass("active");
    window.location.href = `login.html`;
  });
}
