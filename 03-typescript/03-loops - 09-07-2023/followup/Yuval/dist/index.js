"use strict";
let year = 0;
console.log(year);
year++;
console.log(year);
year *= 2;
console.log(year);
console.log(year++); // קודם מציג ואז עושה פלוס 1
console.log(++year); // קודם עושה פלוס ואז מציג תוצאה סופית
year = Math.pow(year, 3);
console.log(year);
console.log(year--); // קודם מציג ואז עושה פחות 1
console.log(--year); // קודם עושה פחות 1 ואז מציג תוצאה סופית
console.log(year /= 2);
