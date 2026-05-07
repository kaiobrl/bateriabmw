/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loading-screen");

  setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

  }, 1800);

});

/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("voltprime-theme");

if(savedTheme === "light"){

  document.body.classList.add("light-mode");

  themeToggle.innerHTML =
  '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const isLight =
  document.body.classList.contains("light-mode");

  if(isLight){

    localStorage.setItem(
      "voltprime-theme",
      "light"
    );

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    localStorage.setItem(
      "voltprime-theme",
      "dark"
    );

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});

/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn =
document.querySelector(".mobile-menu-btn");

const navLinks =
document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){

    mobileMenuBtn.innerHTML =
    '<i class="fa-solid fa-xmark"></i>';

  }else{

    mobileMenuBtn.innerHTML =
    '<i class="fa-solid fa-bars"></i>';

  }

});

/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 80){

    header.style.background =
    "rgba(5,8,22,.92)";

    header.style.boxShadow =
    "0 10px 40px rgba(0,0,0,.35)";

  }else{

    header.style.background =
    "rgba(5,8,22,.6)";

    header.style.boxShadow =
    "none";

  }

});

/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question =
  item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach(otherItem => {

      if(otherItem !== item){

        otherItem.classList.remove("active");

      }

    });

    item.classList.toggle("active");

  });

});

/* =========================================
   FAQ ANIMATION
========================================= */

faqItems.forEach(item => {

  const answer =
  item.querySelector(".faq-answer");

  answer.style.maxHeight = "0px";
  answer.style.overflow = "hidden";
  answer.style.transition =
  "all .4s ease";

});

faqItems.forEach(item => {

  const question =
  item.querySelector(".faq-question");

  const answer =
  item.querySelector(".faq-answer");

  question.addEventListener("click", () => {

    if(item.classList.contains("active")){

      answer.style.maxHeight =
      answer.scrollHeight + "px";

    }else{

      answer.style.maxHeight = "0px";

    }

  });

});

/* =========================================
   PRODUCTS DATABASE
========================================= */

const products = [

  {
    id:1,
    name:"Moura 60Ah",
    price:499,
    category:"Automotiva"
  },

  {
    id:2,
    name:"Heliar 70Ah",
    price:649,
    category:"Premium"
  },

  {
    id:3,
    name:"Bosch 50Ah",
    price:399,
    category:"Compacta"
  }

];

/* =========================================
   CART SYSTEM
========================================= */

let cart = JSON.parse(
  localStorage.getItem("voltprime-cart")
) || [];

const cartCount =
document.querySelector(".cart-count");

function updateCartCount(){

  cartCount.textContent = cart.length;

}

updateCartCount();

const buyButtons =
document.querySelectorAll(".buy-btn");

buyButtons.forEach((button,index) => {

  button.addEventListener("click", () => {

    const product = products[index];

    cart.push(product);

    localStorage.setItem(
      "voltprime-cart",
      JSON.stringify(cart)
    );

    updateCartCount();

    showNotification(
      `${product.name} adicionada ao carrinho`
    );

  });

});

/* =========================================
   NOTIFICATION SYSTEM
========================================= */

function showNotification(message){

  const notification =
  document.createElement("div");

  notification.classList.add(
    "notification"
  );

  notification.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    ${message}
  `;

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.classList.add("show");

  },100);

  setTimeout(() => {

    notification.classList.remove("show");

    setTimeout(() => {

      notification.remove();

    },500);

  },3000);

}

/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    target.scrollIntoView({
      behavior:"smooth"
    });

  });

});

/* =========================================
   FINDER SYSTEM
========================================= */

const finderBtn =
document.querySelector(".finder-btn");

finderBtn.addEventListener("click", () => {

  showNotification(
    "Buscando bateria ideal..."
  );

  setTimeout(() => {

    showBatteryResult();

  },1500);

});

function showBatteryResult(){

  const result = document.createElement("div");

  result.classList.add("finder-result");

  result.innerHTML = `

    <h3>Bateria recomendada</h3>

    <div class="finder-result-card">

      <i class="fa-solid fa-car-battery"></i>

      <div>

        <h4>Moura 60Ah</h4>

        <p>Alta performance • 12 meses</p>

      </div>

      <span>R$ 499</span>

    </div>

  `;

  const finderBox =
  document.querySelector(".finder-box");

  const oldResult =
  document.querySelector(".finder-result");

  if(oldResult){

    oldResult.remove();

  }

  finderBox.appendChild(result);

}

/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  showNotification(
    "Mensagem enviada com sucesso!"
  );

  contactForm.reset();

});

/* =========================================
   WHATSAPP BUTTON
========================================= */

const whatsappFloat =
document.querySelector(".whatsapp-float");

whatsappFloat.addEventListener("click", (e) => {

  e.preventDefault();

  window.open(

    "https://wa.me/5583999999999?text=Olá,%20quero%20uma%20bateria",

    "_blank"

  );

});

/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
document.querySelectorAll(
  ".section, .product-card, .service-card"
);

const revealOnScroll = () => {

  const triggerBottom =
  window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const boxTop =
    element.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      element.classList.add("show-reveal");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
    +counter.innerText.replace(/\D/g,'');

    const current =
    +counter.getAttribute("data-count") || 0;

    const increment =
    target / 40;

    if(current < target){

      const newValue =
      Math.ceil(current + increment);

      counter.setAttribute(
        "data-count",
        newValue
      );

      counter.innerText =
      counter.innerText.includes("+")
      ? `+${newValue}k`
      : counter.innerText.includes("%")
      ? `${newValue}%`
      : `${newValue}h`;

      setTimeout(updateCounter,40);

    }

  };

  updateCounter();

});

/* =========================================
   ACTIVE LINK ON SCROLL
========================================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 150;

    const sectionHeight =
    section.clientHeight;

    if(pageYOffset >= sectionTop){

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active-link");

    if(
      link.getAttribute("href")
      .includes(current)
    ){

      link.classList.add("active-link");

    }

  });

});

/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener("mousemove", (e) => {

  const glow1 =
  document.querySelector(".glow-1");

  const glow2 =
  document.querySelector(".glow-2");

  let x =
  e.clientX / window.innerWidth;

  let y =
  e.clientY / window.innerHeight;

  glow1.style.transform =
  `translate(${x * 40}px, ${y * 40}px)`;

  glow2.style.transform =
  `translate(-${x * 40}px, -${y * 40}px)`;

});

/* =========================================
   FAKE PAGE ROUTER
========================================= */

window.addEventListener(
  "popstate",
  () => {

    console.log(
      "SPA route changed"
    );

  }
);

/* =========================================
   INIT
========================================= */

console.log(
  "⚡ VoltPrime SPA inicializada"
);