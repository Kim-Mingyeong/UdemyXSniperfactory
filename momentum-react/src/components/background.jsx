import React from "react";
import image01 from "images/Midnight in Paris-1.png";
import image02 from "images/Midnight in Paris-2.png";
import image03 from "images/Midnight in Paris-3.jpeg";
import image04 from "images/Midnight in Paris-4.jpeg";
import image05 from "images/Midnight in Paris-5.png";

function Background() {
  const images = [image01, image02, image03, image04, image05];
  //새로고침 시 이미지 자동 변환
  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <>
      <img src={randomImage()} alt="Random Image" />
    </>
  );
}

export default Background;
