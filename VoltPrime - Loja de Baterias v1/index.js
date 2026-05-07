// GSAP
gsap.registerPlugin(ScrollTrigger);

// CURSOR
const cursor =
document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

  gsap.to(cursor,{

    x:e.clientX - 15,
    y:e.clientY - 15,

    duration:.15

  });

});

// LENIS
const lenis = new Lenis({

  duration:1.2,
  smoothWheel:true

});

function raf(time){

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// PARTICLES
tsParticles.load("particles",{

  particles:{

    number:{
      value:60
    },

    color:{
      value:"#22c55e"
    },

    links:{
      enable:true,
      color:"#22c55e"
    },

    move:{
      enable:true,
      speed:1
    }

  }

});

// HERO ANIMATION
gsap.from(".hero-tag",{

  opacity:0,
  y:40,

  duration:1,

  ease:"power4.out"

});

gsap.from(".hero-text h1",{

  opacity:0,
  y:100,

  duration:1.2,

  delay:.2,

  ease:"power4.out"

});

gsap.from(".hero-text p",{

  opacity:0,
  y:50,

  duration:1,

  delay:.4,

  ease:"power4.out"

});

gsap.from(".hero-buttons button",{

  opacity:0,
  y:40,

  stagger:.2,

  duration:1,

  delay:.6,

  ease:"back.out(1.7)"

});

// FLOATING BATTERY
gsap.to(".battery-card",{

  y:-20,
  rotationY:8,

  duration:3,

  repeat:-1,
  yoyo:true,

  ease:"sine.inOut"

});

// SECTION REVEAL
gsap.utils.toArray(".section")
.forEach(section=>{

  gsap.from(section,{

    opacity:0,
    y:100,

    duration:1.2,

    ease:"power4.out",

    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }

  });

});

// PRODUCT 3D
const cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width)-0.5)*20;

    const rotateX =
    ((y / rect.height)-0.5)*-20;

    gsap.to(card,{

      rotateX,
      rotateY,

      scale:1.03,

      duration:.4

    });

  });

  card.addEventListener("mouseleave",()=>{

    gsap.to(card,{

      rotateX:0,
      rotateY:0,

      scale:1,

      duration:.6,

      ease:"power3.out"

    });

  });

});

// BUTTON MAGNETIC
const buttons =
document.querySelectorAll(
  ".btn-primary"
);

buttons.forEach(btn=>{

  btn.addEventListener(
    "mousemove",
    (e)=>{

      const rect =
      btn.getBoundingClientRect();

      const x =
      e.clientX - rect.left - rect.width/2;

      const y =
      e.clientY - rect.top - rect.height/2;

      gsap.to(btn,{

        x:x * .2,
        y:y * .2,

        duration:.3

      });

    }
  );

  btn.addEventListener(
    "mouseleave",
    ()=>{

      gsap.to(btn,{

        x:0,
        y:0,

        duration:.5,

        ease:"elastic.out(1,0.4)"

      });

    }
  );

});

// NAVBAR SCROLL
const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 50){

    header.style.background =
    "rgba(5,8,22,.9)";

    header.style.boxShadow =
    "0 10px 40px rgba(0,0,0,.35)";

  }else{

    header.style.background =
    "rgba(5,8,22,.5)";

    header.style.boxShadow =
    "none";

  }

});

// THEME TOGGLE
const themeToggle =
document.querySelector(".theme-toggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle(
    "light-mode"
  );

});

// WHATSAPP
document.querySelector(".btn-secondary")
.addEventListener("click",()=>{

  window.open(

    "https://wa.me/5583999999999?text=Olá,%20quero%20uma%20bateria",

    "_blank"

  );

});

console.log(
  "⚡ VoltPrime SPA Inicializada"
);