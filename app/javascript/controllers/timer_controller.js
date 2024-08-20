import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  countdownDisplay;
  
  connect() {
    console.log("Timer controller connected!");
  
    this.countdownDisplay = document.getElementById("timer");
    const timerEndAt = new Date(this.countdownDisplay.dataset.timerEnd);
  
    this.updateCountdown(timerEndAt);
  
    this.interval = setInterval(() => {
      this.updateCountdown(timerEndAt);
    }, 1000);
  }

  updateCountdown(timerEndAt) {
    const now = new Date();
    let totalSeconds = Math.floor((timerEndAt - now) / 1000);

    if (totalSeconds <= 0) {
      clearInterval(this.interval);
      document.getElementById("timer").textContent = "Time's up! Water your plant!";
      alert("Time's up! Water your plant!");
      return;
    }

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    this.countdownDisplay.textContent = `Time remaining: ${days}d ${hours}h ${minutes}m`;
  }
}
