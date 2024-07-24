import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Timer controller connected!");

    const form = document.getElementById("timer-form");
    const countdownDisplay = document.getElementById("countdown");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const days = parseInt(document.getElementById("days-input").value, 10) || 0;
      const hours = parseInt(document.getElementById("hours-input").value, 10) || 0;
      const minutes = parseInt(document.getElementById("minutes-input").value, 10) || 0;
      
      let totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60);

      if (totalSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
      }

      updateCountdownDisplay(totalSeconds);

      const interval = setInterval(() => {
        totalSeconds -= 1;
        updateCountdownDisplay(totalSeconds);

        if (totalSeconds <= 0) {
          clearInterval(interval);
          countdownDisplay.textContent = "Time's up! Water your plant!";
          alert("Time's up! Water your plant!");
        }
      }, 1000);
    });

    function updateCountdownDisplay(totalSeconds) {
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      countdownDisplay.textContent = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
}
