const images = [
  "Midnight in Paris-1.png",
  "Midnight in Paris-2.png",
  "Midnight in Paris-3.jpeg",
  "Midnight in Paris-4.jpeg",
  "Midnight in Paris-5.png",
];

//새로고침 시 이미지 자동 변환
const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //img element 생성
bgImage.src = `img/${randomImage}`; //img 경로 설정
//console.log(bgImage);
document.body.appendChild(bgImage); //img html body에 추가
