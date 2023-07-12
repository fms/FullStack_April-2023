separator();

let someString = indentText("level1") + indentText("level2", 2);
console.log(someString);
separator();


console.log(indentText("Level0"));
logIndented("Level1", 1);
separator();
logIndented("Level2", 2);
separator();
logIndented("Level3", 3);
logIndented("Level4", 4);

// invoke - call the function
printAddition(4, 6);
printAddition(6, 4);
//printAddition("6", "8");

function separator() {
    console.log("<---------------------->");
}

function addition(num1: number, num2: number ): number {
    logIndented("addition", 2);
    return num1 + num2;
}

function printAddition(num1: number, num2: number) 
{
    logIndented("printAddition");
    console.log(addition(num1, num2));
}

function indentText(text: string, level: number = 0) : string {
    let indented = "";

    for (let thisLevel = 1; thisLevel <= level; thisLevel++)
    {
        indented += "   ";
    }  

    indented += text;
    return indented;
}

function logIndented(text: string, level: number = 0) {
    console.log("==>" + indentText(text, level));
}