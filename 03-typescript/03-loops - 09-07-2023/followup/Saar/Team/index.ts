let height = prompt("What is your height?");
let age = prompt("What is your age?");
let playersInTeam = 5
const minHeight = 193;
const minAge = 18;
const maxAge = 27;

while(playersInTeam <= 9)

{

if (height && age)
{
    let parseHeight = parseInt(height);
    let parseAge = parseInt(age);
    if (Number.isNaN(parseHeight) && Number.isNaN(parseAge))
     {
        alert("Invalid number")
        
    } else if (parseAge >= minAge && parseAge <= maxAge && parseHeight >= minHeight) 
    {
        alert("You can be in our team!");
        playersInTeam++;
    }
    else 
    {
        alert(`Your parameters is not good what we are searching for, try somowhere else, good luck!`)
    }
}

else
 {
    alert("you didnt put any parameter.")
}
height = prompt("What is your height?");
age = prompt("What is your age?");
}
