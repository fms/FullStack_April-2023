
const liveDate = function(timezone: string): string {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };
    return new Date().toLocaleString(undefined,options);
}

function dateClick(event:MouseEvent) {
    const paraTime = document.querySelector(".para") as HTMLParagraphElement;

    const isVisible = paraTime.classList.toggle("visible");

    let updateInterval: any = null;

    if(isVisible) {
        updateClock();
        updateInterval = setInterval(updateClock, 1000);
    } else {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

function updateClock() {
    const paraTime = document.querySelector(".para") as HTMLParagraphElement;
    return paraTime.textContent = liveDate('Asia/Jerusalem');
}
