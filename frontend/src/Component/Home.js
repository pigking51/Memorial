import { Carousel } from "./Carousel";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const moveImage = Carousel();

    return moveImage;
  }, []);
  return (
    <>
      <Carousel />
      <h1>메인화면입니다.</h1>
      <div className="image">
        <a href="#">
          <img
            src="/images/banner/mainpagebanner/event_1.png"
            alt="임시이미지"
          />
        </a>
        <a href="#">
          <img
            src="/images/banner/mainpagebanner/event_2.png"
            alt="임시이미지2"
          />
        </a>
        <a href="#">
          <img
            src="/images/banner/mainpagebanner/event_3.png"
            alt="임시이미지3"
          />
        </a>
      </div>
      <div className="greetings">
        <span> 안녕하세요, MOVIE DIC 입니다 :) </span>
      </div>
    </>
  );
}
