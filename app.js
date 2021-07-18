const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click', runEvent);

function runEvent(e) {
    const randomNumber = getRandomNumber();
  
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];

    e.preventDefault();
  };

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
