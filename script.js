gsap.registerPlugin(ScrollTrigger);

/* PRELOADER */
window.addEventListener("load",()=>{
  gsap.to("#preloader",{opacity:0,duration:1,delay:1,onComplete:()=>preloader.remove()});
  setTimeout(()=>promo.style.display="flex",3000);
});

/* HERO */
gsap.from(".hero-content",{opacity:0,y:60,duration:1.4});

/* SVG INK */
gsap.from(".ink-svg path",{
  strokeDasharray:500,
  strokeDashoffset:500,
  duration:3,
  repeat:-1,
  yoyo:true
});

/* ABOUT */
gsap.from(".about-text",{
  scrollTrigger:{trigger:".about",start:"top 80%"},
  x:100,
  opacity:0,
  duration:1
});

/* SERVICES */
gsap.from(".service-card",{
  scrollTrigger:{trigger:".services",start:"top 80%"},
  y:40,
  opacity:0,
  stagger:.2
});

/* PROMO */
closePromo.onclick=()=>promo.style.display="none";

const inkSections = document.querySelectorAll('.ink-drop');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{ threshold: 0.3 });

inkSections.forEach(sec => observer.observe(sec));


  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle'); // optional for animation
  });


