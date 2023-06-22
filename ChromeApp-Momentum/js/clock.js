const clock = document.querySelector("h1#clock");

//interval: '매번'일어나야 하는 무언가
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //브라우저가 load되자마자 함수 즉시 호출
setInterval(getClock, 1000); //매초마다 함수 호출
