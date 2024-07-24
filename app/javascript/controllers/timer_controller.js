import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Timer controller connected!");

    const form = document.getElementById("timer-form");
    const countdownDisplay = document.getElementById("countdown");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const timeInput = document.getElementById("time-input").value;
      let time = parseInt(timeInput, 10);

      if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
      }

      countdownDisplay.textContent = `Time remaining: ${time} seconds`;
      const interval = setInterval(() => {
        time -= 1;
        countdownDisplay.textContent = `Time remaining: ${time} seconds`;

        if (time <= 0) {
          clearInterval(interval);
          countdownDisplay.textContent = "Time's up! Water your plant!";
          alert("Time's up! Water your plant!");
        }
      }, 1000);
    });
  }
}
