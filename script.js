const scrollBtn = document.querySelector(".scrollup-btn");
const navbar = document.querySelector(".navbar");
const navBtn = document.querySelector(".navbar-toggler");
let isNavBtn = false;

addEventListener("scroll", () => {
  if (this.scrollY > 20) navbar.classList.add("navBgc");
  else if (!isNavBtn) navbar.classList.remove("navBgc");
  if (this.scrollY > 500) scrollBtn.classList.add("show");
  else scrollBtn.classList.remove("show");
});

scrollBtn.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

navBtn.addEventListener("click", () => {
  isNavBtn ? (isNavBtn = false) : (isNavBtn = true);
  if (this.scrollY < 20) {
    navbar.classList.toggle("navBgc");
  }
});

var typed = new Typed(".typing", {
  strings: ["Software Engineer", "Graphic Designer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".typing-2", {
  strings: ["Software Engineer", "Graphic Designer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});
