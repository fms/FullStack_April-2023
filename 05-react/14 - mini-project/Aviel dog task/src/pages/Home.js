import Footer from "../components/Footer";
import login from "../components/Input"


export default function Home() {
  
  return (
    <>
      <main>
        <section className="content">
        <div className="aviel-title1">  
        <h1  className="aviel-title"> WELCOM TO DOG GALLERY</h1>
        </div>
        

 <img className="mylogo"  src="https://i.imgur.com/qkdpN.jpg" alt="Paris" width="300" height="300"></img> 
          

        </section>

   
      </main>

      <section className="login-section">
      <form action="Shop-Football" method="get" target="_blank">

<div>
  <label className="username" for="userId">Username</label> <br />
  <input
    type="email"
    id="userId"
    name="userName"
    placeholder="user@example.com"
    required
  />
</div>
<div>
  <label className="password" for="pass"> Password </label><br />
  <input type="password" id="pass" name="parola" required />
</div>
<input className="rememberme-checkbox" type="checkbox" id="checkbox" name="checkAccount" />
<label className="rememberme" for="checkbox">Remember me</label>
<br />
<button className="login" type="submit" href="Dogs" >LOG IN</button>
</form>
  
         </section>
       

    </>
  );

}
