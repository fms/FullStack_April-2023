// enum

enum StatusEnum {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}
enum AnimalLegsCount {
  TWO = "two",
  FOUR = "four",
  EIGHT = "eight",
}

function getStatus(status: StatusEnum) {
  if (status === StatusEnum.IDLE) {
    console.log("not started");
  } else if (status === StatusEnum.LOADING) {
    console.log("loading");
  } else if (status === StatusEnum.FAILED) {
    console.log("function has failed!");
  } else {
    console.log("not valid status");
  }
}

getStatus(StatusEnum.IDLE);

console.log(AnimalLegsCount.EIGHT);

// interface

interface DeveloperType {
  name: string;
  year: number;
  legs: AnimalLegsCount;
  clacAge: () => void;
  lastName?: string | undefined | null;
}

const gili: DeveloperType = {
  name: "gili",
  year: 1990,
  lastName: "mena",
  legs: AnimalLegsCount.TWO,
  clacAge: () => {
    console.log(new Date().getFullYear() - gili.year);
  },
};

function multi(a, b, c?, d?) {
  if (!c) {
    return a * b;
  } else {
    return a * b * c * d;
  }
}
 
multi(1, 2, 3)

// const Dor: DeveloperType = {
//   name: "dor",
//   year: 1998,
//   legs: AnimalLegsCount.TWO,
// };

