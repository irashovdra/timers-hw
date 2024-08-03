let totalTime = 60 * 60;
const timerElement = document.getElementById("oneHourTimer");
const messageElement = document.getElementById("message");

function updateTimer() {
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  timerElement.textContent = `${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  if (totalTime === 30 * 60) {
    messageElement.textContent = "Залишилось менше половини часу!";
  }

  if (totalTime > 0) {
    totalTime--;
  } else {
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateTimer, 1000);
