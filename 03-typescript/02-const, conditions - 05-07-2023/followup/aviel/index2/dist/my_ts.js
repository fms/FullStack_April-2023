// const my_age1 = 18 ;
// const my_age2 = 25 ;
// var age: any = prompt ("what is your age ? ")
// var age_as_num = parseInt (age);
// if (age < my_age1 )     {
//     document.write('less from 18');
// }  
// else
// {
//     document.write('big from 18'); 
// }
var my_bmi1 = 25;
var my_bmi2 = 18.5;
var weight = prompt("what is your weight ? ");
var weight_as_num = parseInt(weight);
var height = prompt("what is your height ? ");
var height_as_num = parseInt(height);
var bmi = (weight / height) ^ 2;
if (bmi > my_bmi1) {
    document.write('Overweight');
}
else if (bmi < my_bmi2) {
    document.write('Underweight');
}
else {
    document.write('Normal');
}
