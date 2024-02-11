

function select_page () {

// alert("eeeee")
    // var aaa = document.querySelector("#name_input") as HTMLInputElement | null;
    // let input_val = aaa.value

    const input_val = document.getElementById('name_input').value;
  
    localStorage.setItem("user" , input_val);

    
if (input_val === "aviel") {
    window.location.href = 'http://localhost:3000/manager.html';
  } else {
    window.location.href = 'http://localhost:3000/worker.html';
  }




        // Redirect to the second page
        //   window.location.href = 'http://localhost:3000/manager.html';

        //   window.location.href = "./manager.html";

        // window.location.replace("./manager.html");

  } 