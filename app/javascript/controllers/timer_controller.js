import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["countdown"];

  connect() {
    console.log("Timer controller connected!");

    this.countdownTargets.forEach((countdownDisplay) => {
      const timerEndAt = new Date(countdownDisplay.dataset.timerEnd);
      this.updateCountdown(countdownDisplay, timerEndAt);

      setInterval(() => {
        this.updateCountdown(countdownDisplay, timerEndAt);
      }, 1000);
    });
  }

  updateCountdown(countdownDisplay, timerEndAt) {
    const now = new Date();
    let totalSeconds = Math.floor((timerEndAt - now) / 1000);

    if (totalSeconds <= 0) {
      countdownDisplay.textContent = "Time's up! Water your plant!";
      return;
    }

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
