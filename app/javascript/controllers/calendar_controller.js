import { Controller } from "@hotwired/stimulus";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class extends Controller {
  connect() {
    console.log("Calendar controller connected!"); // Debug log

    var calendarEl = document.getElementById("calendar");

    if (calendarEl) {
      console.log("Calendar element found!"); // Debug log

      var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        events: [
          {
            title: "Watering Schedule",
            start: "2023-07-22",
          },
          // Add more events as needed
        ],
      });

      calendar.render();
      console.log("Calendar rendered!"); // Debug log
    } else {
      console.log("Calendar element not found!"); // Debug log
    }
  }
}
