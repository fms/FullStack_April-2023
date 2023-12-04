// hello
document.addEventListener("DOMContentLoaded", () => {
  const currentDate: any = document.querySelector("#month");
  const calendarDays = document.querySelector(".day");
  const prevWeekButton = document.getElementById("prevWeek");
  const nextWeekButton = document.getElementById("nextWeek");

  let startDate = new Date();
  let currMonth = startDate.getMonth();
  let currYear = startDate.getFullYear();
  updateCalendar(startDate);
  
  const months = [
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

  prevWeekButton!.addEventListener("click", () => {
    startDate.setDate(startDate.getDate() - 7);
    updateCalendar(startDate);
  });

  nextWeekButton!.addEventListener("click", () => {
    startDate.setDate(startDate.getDate() + 7);
    updateCalendar(startDate);
  });

  const renderCalendar = () => {
    currentDate!.innerText = `${months[currMonth]} ${currYear}`;
  };
  renderCalendar();

  function updateCalendar(start: any) {
    calendarDays!.innerHTML = "";

    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      const dayElement = document.createElement("span");
      dayElement.className = "day";

      dayElement.innerHTML = `${day.getDate()}`;

      calendarDays!.appendChild(dayElement);
    }
  }
});

