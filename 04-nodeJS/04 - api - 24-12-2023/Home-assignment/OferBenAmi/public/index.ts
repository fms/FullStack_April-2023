console.log("connected!");

const dateDiv = document.querySelector<HTMLDivElement>(".nowDiv");
const para = document.querySelector<HTMLParagraphElement>(".parag");

async function dateNow() {
    try {
        const dateResponse = await fetch("/now");
        const { date } = await dateResponse.json();
        if (para) {
            console.log(para?.textContent);
            if (para.textContent !== null) {
                para.textContent = date;
            }
        }
    } catch (error) {
        console.error("Error fetching date:", error);
    }
}
