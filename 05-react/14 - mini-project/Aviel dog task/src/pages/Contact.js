// import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  return (
    <main>
      <a href="Shop-Runing"><img className="Runing-img-page" src={require('../img/phone.png') } alt="Runing-collection" /></a>
      <section className="content">
        <section className="welcome-section">
          <p>Contact us</p>
          <h1> We are waiting to hear from you</h1>
      
          <AiOutlineMail className="nav-icons-mail" />
          <FaPhone className="nav-icons-phone" />
          <FaWhatsapp className="nav-icons-what" />
        </section>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </main>
  );
}
