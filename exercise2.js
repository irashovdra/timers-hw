let totalTime = 30 * 1000;
const timerElement = document.getElementById("timer");
const animateElement = document.getElementById("animate");
const startButton = document.getElementById("startButton");

function updateTimer() {
  const seconds = Math.floor(totalTime / 1000);
  const milliseconds = totalTime % 1000;

  timerElement.textContent = `0:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;

  if (totalTime <= 10 * 1000 && !animateElement.classList.contains("animate")) {
    animateElement.style.display = "block";
    animateElement.classList.add("animate");
  }

  if (totalTime > 0) {
    totalTime -= 10;
  } else {
    clearInterval(timerInterval);
    startButton.disabled = false;
  }
}

const timerInterval = setInterval(updateTimer, 10);
