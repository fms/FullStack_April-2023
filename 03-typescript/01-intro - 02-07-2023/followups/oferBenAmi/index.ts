let worker1 = {
  age: 24,
  job: "programmer",
  yearsOfExp: 4,
  isAvailableToWork: true,
};
if (
  worker1.age >= 24 &&
  worker1.job == "programmer" &&
  worker1.yearsOfExp >= 3 &&
  worker1.isAvailableToWork == true
)
  console.log("He can work here");
else console.log("He cannot work here");



const printEvens = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) console.log(i);
  }
};
const printOdds = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) console.log(i);
  }
};


const head1 = document.getElementById('head1');
head1?.classList.add("head1-from-ts");
head1?.classList.remove("head1");

