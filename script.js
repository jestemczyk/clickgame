const start = document.getElementById("start");
const game = document.getElementById("game");
const time = document.getElementById("time");
const result = document.getElementById("result");
const timeH1 = document.getElementById("time-header");
const resultH1 = document.getElementById("result-header");
const inputTime = document.getElementById("game-time");

let score = 0;

function startGame() {
    inputTime.setAttribute("disabled", "disabled");
    if(timeH1.classList.contains("hide")){
        timeH1.classList.remove("hide");
        resultH1.classList.add("hide");
    };
  start.classList.add("hide");
  game.style.backgroundColor = "#ffffff";
  renderBox();
  let interval = setInterval(() => {
    currentTime = Number(time.textContent);
    if(currentTime <= 0){
        clearInterval(interval);
        endGame();
    }else{
        let newTime = currentTime - 0.1;
        time.textContent = newTime.toFixed(1);
    }
  }, 100);
}

function endGame(){
    inputTime.removeAttribute("disabled");
    game.innerHTML = '';
    game.style.backgroundColor = "#cccccc";
    start.classList.remove("hide");
    result.textContent = score;
    score = 0;
    timeH1.classList.add("hide");
    time.textContent = inputTime.value;
    resultH1.classList.remove("hide");
}

function renderBox() {
  const box = document.createElement("div");
  let boxSize = getRandom(20, 100);
  let maxDelta = 300 - boxSize;
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = "#000000";
  box.style.position = "absolute";
  box.style.top = `${getRandom(5, maxDelta)}px`;
  box.style.right = `${getRandom(5, maxDelta)}px`;
  box.style.cursor = "pointer";
  game.append(box);
  box.classList.add("box");
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



document.querySelector(".app__content").addEventListener("click", (e) => {
  if (e.target === start) {
    startGame();
  }

  if (e.target.classList.contains("box")) {
      e.target.remove();
      renderBox();
      score++;
  }
});



inputTime.addEventListener("change", () => {
    if(timeH1.classList.contains("hide")){
        timeH1.classList.remove("hide");
        resultH1.classList.add("hide");
    }

    time.textContent = inputTime.value;

});

window.onload = function(){
    time.textContent = inputTime.value;
};