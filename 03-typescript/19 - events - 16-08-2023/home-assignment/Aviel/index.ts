
function changeh1red() {

  const redcolor = document.querySelector('#id_h1') as HTMLInputElement | null;
  
  if (redcolor != null) {
  
  redcolor.style.color = "red";
  
    }
    
  }
  
    
  /////// Easy

      function displaybluecolor() {
  
      const bluecolor = document.querySelector('#div_id') as HTMLInputElement | null;
          
          if (bluecolor != null) {
  
            bluecolor.style.background = "blue";

            // setInterval(displaybluecolor, 5000);
  
      // bluecolor.innerHTML += "Hello";
  
      // bluecolor.style.background = "green"
    }
  
  }
  
  
  function displayredcolor() {
  
    const redcolor = document.querySelector('#div_id') as HTMLInputElement | null;
        
        if (redcolor != null) {
  
          redcolor.style.background = "red";
  }
  
  }



    /////// Medium


          var images = ['image/js1.png', 'image/js2.png', 'image/js3.png'];
  
      


          function next_image() {
  
          const imge = document.querySelector('#my_imge') as HTMLInputElement | null;
          
          if (imge != null) {
          
          // name.value = "aviel";
  
          imge.src = images[0 + 1 ]  ;
  
          
          
            }
            
          }


                function prev_image() {
  
          const imge = document.querySelector('#my_imge') as HTMLInputElement | null;
          
          if (imge != null) {
          
          // name.value = "aviel";
  
          imge.src = images[0 ]  ;
  
          
          
            }
            
          }
  






function passwords () {

  const input1 = document.getElementById('id_pass1') as HTMLInputElement | null;

  let value1 = input1?.value;
  // console.log(value1) 

  const input2 = document.getElementById('id_pass2') as HTMLInputElement | null;

  let value2 = input2?.value;
  // console.log(value2) 

  const resurt = document.querySelector('#test_result') as HTMLInputElement | null;

  if (value1 === value2) {
    if (resurt != null) {
    resurt.value = "its ok"
    
  }


}
}



    /////// Advanced


    