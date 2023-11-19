let header=document.querySelector(".main-header")
function mainHeader () {
  return (header.innerHTML = `
  <div class="container">
  <div class="header-1">
    <div class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" name="search" placeholder="Search">
    </div>
    <h2>AC Milan</h2>
    <div class="icons">
      <div class="darkLight">
        <i class='bx bx-sun sun'></i>
        <i class="fa-regular fa-moon moon"></i>
      </div>
      <a href="sign.html"><i class="fa-solid fa-user user"></i></a>
      <a href="shoptwo.html"><i class="fa-solid fa-cart-shopping shopp"></i></a>
    </div>
    <input onclick="showNav ()" type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
  </div>
  <ul class="header-2">
  <li><a href="index.html">HOME</a></li>
  <li><a href="champions.html">CHAMPIONS</a></li>
  <li><a href="shop.html">SHOP</a></li>
  <li><a href="">SEASONS</a></li>
  <li><a href="">TICKETS</a></li>
  <li><a href="contact.html">CONTACT</a></li>
  </ul>
</div>
  `)
}
mainHeader()

let footer=document.querySelector(".footer")
function mainFooter () {
  return (footer.innerHTML=`     
  <div class="container">
  <div class="big-holder">
  <div class="navigation">
    <h3>Navigations</h3>
    <div class="rows">
      <ul>
        <li><a href="#">Store online</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Shopping cart</a></li>
        <li><a href="#">Football shop</a></li>
      </ul>
      <ul>
        <li><a href="#">Shop now</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      <ul>
        <li><a href="#">Point of sale</a></li>
        <li><a href="#">Payments</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </div>
  </div>
  <div class="promo">
    <h3>Promo</h3>
    <img src="images/Landing Van-Basten.jpg" alt="">
    <p>
      <span class="finding">Finding Your Perfect Items</span>
      <span class="promo">Promo from August 15 — 25, 2023</span>
    </p>
  </div>
</div>
  <div class="contact">
    <h3>Contact Info</h3>
    <ul>
      <li>
        <i class="fa-solid fa-location-dot"></i>
        203 Fake St. Mountain View, Milano, Italia
      </li>
      <li>
        <i class="fa-solid fa-phone-volume"></i>
        +2 392 3929 210
      </li>
      <li>
        <i class="fa-solid fa-envelope"></i>
        emailaddress@domain.com
      </li>
    </ul>
    <h5>Subscribe</h5>
    <div class="mini-box">
      <input type="email" name="email" placeholder="Email" id="#">
      <a href="#">Send</a>
    </div>
    </div>
    <p class="copyright">
      Copyright ©2023 All rights reserved | This template is made with
      <i class="fa-solid fa-heart heart"></i>
      by <span class="name">M7MD</span>
    </p>
  </div>
  `)
}
mainFooter()

let scrollBar = document.querySelector(".scrollBar");
window.onscroll = function () {
if(this.scrollY >= 400){
  darkLight.classList.add("hidden")
  scrollBar.classList.add('show')
}else{
  darkLight.classList.remove("hidden")
  scrollBar.classList.remove('show')
}
};

scrollBar.onclick = function () {
window.scrollTo({
  left: 0,
  top: 0,
  behavior: "smooth",
});
};

let body = document.querySelector("body");
let darkLight = document.querySelector(".darkLight");

function darkMode () {
if (localStorage.getItem("mode") === "dark-mode") {
  body.classList.add("dark");
}
darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
}
darkMode()
function showNav () {
  document.querySelector(".header-2").classList.toggle("active")
}