//         params - parametry
/* function tomas(item, item2){
    console.log("Nesu: " + item + "," + item2);
}

//      args - argumenty
tomas("mys", "pocitac");
tomas("notebook", "monitor");



// arrow funkce 2. zpusob
const ttomas = (item, item2) => {
    console.log(`Nesu: ${item}, ${item2}`);
}
ttomas("mys", "pocitac");
ttomas("notebook", "monitor");
*/

// $ - shift + 4 (nad písmenem R)
// {} - shift + prava klavesa od pismene P
// () - shift + 9 (nad pismenem O)
// [] - prava klase od pismene P

/*function play (song, artist) {
console.log(`Playing: ${song} by ${artist}`)
}


play("Never gonna give you up", "Rick Astley");
playMusic("HAFO","Frank wild")*/

// alt+shift+f = formátování

/*function sum(a, b) {
  return a + b;
}

let resultA = sum(5, 4);
let resultB = sum(7, 4);
let result = sum(resultA, resultB);
console.log(result);



const ssum = (a, b) => a + b;

let rresultA = sum(5, 4);
let rresultB = sum(7, 4);
let rresult = sum(rresultA, rresultB);
console.log(rresult);*/

const point = document.getElementById("point");
const startButton = document.getElementById("startButton");

let gameInterval;
let gameIntervalSpeed = 500;
let gameStart;

startButton.onclick = () => {
  startButton.style.display = "none";
  moveElement(point, getRandomNumber(0, 600), getRandomNumber(0, 600));
  setPointOnclick(point);
  setGameInterval(point);
  gameStart = performance.now();
};

const moveElement = (element, x, y) => {
  element.style.top = y + "px";
  element.style.left = x + "px";
};

const setPointOnclick = (element) => {
  element.onclick = () => {
    let gameEnd = performance.now();
    let time = gameEnd - gameStart;
    time = Math.floor(time);
    showTime.innerText = `Time : ${time}ms`;
    gameStart = gameEnd;
    element.innerText++;
    if (gameIntervalSpeed > 200) {
      gameIntervalSpeed -= 10;
      setGameInterval(element);
    }
    moveElement(
      element,
      getRandomNumber(0, window.innerWidth + 85),
      getRandomNumber(0, window.innerHeight - 85)
    );
  };
};

const setGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(
      element,
      getRandomNumber(0, window.innerWidth - 85),
      getRandomNumber(0, window.innerHeight - 85)
    );
  }, gameIntervalSpeed);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
