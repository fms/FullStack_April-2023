var age = prompt("What is your favorite number?");

if (age)
{
    var ageAsNum = parseInt(age);
    console.log(ageAsNum); 

    if (!Number.isNaN(ageAsNum))
    {
        if (ageAsNum == 0)
        {
            console.log("You have a value!");
        }
        else if (ageAsNum < 0) {
            console.log("You are a very negative person!");
        }
        else {
            console.log("You are a very positive person!");
        }
    }
    else {
        console.log("I don't know words");
    }
}
else
{
    console.log("Alright then, keep your secrets!");
}