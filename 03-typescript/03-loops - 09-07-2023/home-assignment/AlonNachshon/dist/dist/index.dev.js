"use strict"; // let i:number = 99;
// console.log("1. Do you know the '99 Bottles of Beer on the wall' song?")
// while(i>0){
//     if(! (i == 1)){
//         console.log( i + ' bottles of beer on the wall, '+i+' bottles of beer.')
//         console.log("Take one down and pass it around, now there's "+(i-1)+" more bottles of beer on the wall!")   
//     }else{
//         console.log("1 bottle of beer on the wall, 1 bottle of beer.")
//         console.log(" Take one down and pass it around, there's no more bottles of beer on the wall!")
//     }
//     i--
// }
// console.log("2. Get a number (n) from the user, Calculate and print the total: 1+2+3+...+n. ")
// let user_input:string | number | null = prompt("Give me a number to Calculate and print the total: 1+2+3+...+n. : ")
// user_input = user_input == null? 0:parseInt(user_input);
// if(user_input){
//     let total = 0;
//     for(let i = 1; i <= user_input ;i++){
//         total += i;
//     }
//     console.log("You gave the number: "+user_input+", The total of 1+2+3+...+n. : "+total)
// }else{
//     console.log(user_input+ "- NOT a valid input")
// }
// console.log("3. Get a number (n) from the user. calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n)")
// user_input = prompt("Give me a number to calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n: ")
// user_input = user_input == null? 0:parseInt(user_input);
// if(user_input){
//     let total = 0;
//     for(let i = 1; i <= user_input ;i++){
//         for(let j=1; j<i ; j++){
//             total += j;
//         }
//         total += i
//     }
//     console.log("You gave the number: "+user_input+", The total of (1 + 1+2 + 1+2+3 + ... + 1+2+...+n): "+total)
// }else{
//     console.log(user_input+ "- NOT a valid input")
// }
// console.log("4. Bonus -  7 Boom for any given number")
// user_input = prompt("Give me a Number to play with: ")
// user_input = user_input == null? 0:parseInt(user_input);

var user_input = 71;

if (user_input) {
  var msg = "BOOM";

  if (user_input < 7) {
    console.log("No " + msg + " :( found");
  } else {
    // let digit_num = 0;
    // let levels = user_input;
    // while(!(levels < 1)){
    //     levels /= 10
    //     digit_num++
    // }
    // console.log("Num of Digits: "+digit_num)
    var i = 1;

    while (i <= user_input) {
      if (i % 7 == 0) {
        console.log(i + " " + msg);
      } else {
        var tmp = i;

        while (tmp >= 1) {
          console.log("tmp " + tmp);
          tmp = Math.round(tmp % 10);

          if (tmp == 7) {
            console.log(i + " " + msg);
            tmp = -1;
            break;
          }

          Math.round(tmp / 10);
        }

        if (tmp == -1) {
          console.log(i);
        } // let tmp_num
        // let flag = true
        // levels = 1
        // //Fix here so it wouldnt go over the whole numbers.. 
        // // Do it different !!! first you %10 than you /10 .. repeat until its 1 (or less then 1 , depands. 
        // //I dont even need the forst while to check.. just do what iwrote on the above line thats sufficiant. 
        // while(levels < digit_num && flag){  
        //     tmp_num = i % Math.pow(10,levels)
        //     if (tmp_num == 7){
        //         console.log(i+" "+msg)
        //         flag = false
        //     }
        //     tmp_num = i / Math.pow(10,levels)
        //     // console.log("tmp!!!:  "+tmp_num )
        //     if (tmp_num < 1){
        //         flag = false
        //         console.log("tmp < 0 "+tmp_num )
        //     }else{
        //         tmp_num = Math.round(tmp_num)
        //         console.log("tmp > 0 "+tmp_num )
        //         levels++
        //     }
        // }

      }

      i++;
    }
  }
} else {
  console.log(user_input + "- NOT a valid input");
}