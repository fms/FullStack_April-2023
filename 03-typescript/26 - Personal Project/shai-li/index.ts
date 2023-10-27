document.addEventListener("DOMContentLoaded", () => {
  const currentDate: any = document.querySelector("#month");
  const calendarDays = document.querySelector(".day");
  const prevWeekButton = document.getElementById("prevWeek");
  const nextWeekButton = document.getElementById("nextWeek");
  
  let startDate = new Date();
  updateCalendar(startDate);
  

  prevWeekButton!.addEventListener("click", () => {
    startDate.setDate(startDate.getDate() - 7);
    updateCalendar(startDate);
  });

  nextWeekButton!.addEventListener("click", () => {
    startDate.setDate(startDate.getDate() + 7);
    updateCalendar(startDate);
  });

  

  function updateCalendar(start: Date) {
    currentDate.textContent = getFormattedWeekRange(startDate);
    calendarDays!.innerHTML = "";
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      // console.log(day);
      day.setDate(start.getDate() + i); //מעלה את הימים
      const dayElement = document.createElement("span"); 
      dayElement.className = "day";
      
      dayElement.innerHTML = `${day.getDate()}`;
      
      calendarDays!.appendChild(dayElement);
      
      return;
      
    }
    
  }

  function getFormattedWeekRange(startDate: Date) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return `${startDate.toDateString()} - ${endDate.toDateString()}`;
  }

});
