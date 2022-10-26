import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <>
  <footer class="footer-distributed">

<div class="footer-left">

  <h3>THE<span>GOFFIES</span></h3>

  <p class="footer-links">
    <a href="#">Home</a>
    ·
    <a href="#">Blog</a>
    ·
    <a href="#">Pricing</a>
    ·
    <a href="#">About</a>
    ·
    <a href="#">Faq</a>
    ·
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">THE GOFFIES © 2022</p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/RayuSahil"><i class="fa fa-twitter"></i></a>
    <a href="https://www.linkedin.com/in/sahil-rayu-84866b1b7/"><i class="fa fa-linkedin"></i></a>
    <a href="https://github.com/3011ar"><i class="fa fa-github"></i></a>

  </div>

</div>

<div class="footer-right">

  <p>Contact Us</p>

  <form action="#" method="post">

    <input type="text" name="email" placeholder="XYZ@ABC.COM"/>
    <textarea name="message" placeholder="Message"></textarea>
    <button>Send</button>

  </form>

</div>

</footer>
    </>
  );
};

export default Footer;
