document.addEventListener("DOMContentLoaded", function () {
    var currentDate = document.querySelector("#month");
    var calendarDays = document.querySelector(".day");
    var prevWeekButton = document.getElementById("prevWeek");
    var nextWeekButton = document.getElementById("nextWeek");
    var startDate = new Date();
    updateCalendar(startDate);
    prevWeekButton.addEventListener("click", function () {
        startDate.setDate(startDate.getDate() - 7);
        updateCalendar(startDate);
    });
    nextWeekButton.addEventListener("click", function () {
        startDate.setDate(startDate.getDate() + 7);
        updateCalendar(startDate);
    });
    function updateCalendar(start) {
        currentDate.textContent = getFormattedWeekRange(startDate);
        calendarDays.innerHTML = "";
        for (var i = 0; i < 7; i++) {
            var day = new Date(start);
            // console.log(day);
            day.setDate(start.getDate() + i); //מעלה את הימים
            var dayElement = document.createElement("span");
            dayElement.className = "day";
            dayElement.innerHTML = "" + day.getDate();
            calendarDays.appendChild(dayElement);
            return;
        }
    }
    function getFormattedWeekRange(startDate) {
        var endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        return startDate.toDateString() + " - " + endDate.toDateString();
    }
});
