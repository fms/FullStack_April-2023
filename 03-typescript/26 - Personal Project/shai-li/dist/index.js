// hello
document.addEventListener("DOMContentLoaded", function () {
    var currentDate = document.querySelector("#month");
    var calendarDays = document.querySelector(".day");
    var prevWeekButton = document.getElementById("prevWeek");
    var nextWeekButton = document.getElementById("nextWeek");
    var startDate = new Date();
    var currMonth = startDate.getMonth();
    var currYear = startDate.getFullYear();
    updateCalendar(startDate);
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    prevWeekButton.addEventListener("click", function () {
        startDate.setDate(startDate.getDate() - 7);
        updateCalendar(startDate);
    });
    nextWeekButton.addEventListener("click", function () {
        startDate.setDate(startDate.getDate() + 7);
        updateCalendar(startDate);
    });
    var renderCalendar = function () {
        currentDate.innerText = months[currMonth] + " " + currYear;
    };
    renderCalendar();
    function updateCalendar(start) {
        calendarDays.innerHTML = "";
        for (var i = 0; i < 7; i++) {
            var day = new Date(start);
            day.setDate(start.getDate() + i);
            var dayElement = document.createElement("span");
            dayElement.className = "day";
            dayElement.innerHTML = "" + day.getDate();
            calendarDays.appendChild(dayElement);
        }
    }
});
