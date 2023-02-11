const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const container = document.querySelector(".container");

    // the toggle navigation
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
          container.style.visibility = "visible";
        } else {
          container.style.visibility = "hidden";
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 1.5
          }s`;
        }
      });
      // Burger animation
      burger.classList.toggle("toggle");
    });
  };
  navSlide();      
  
  
var date = new Date();
document.write("Today's date: " +date.getDate());

let loading = 2;
console.log(Math.random(loading));

var min = 10;
var max = 20;
var randomNumber = Math.log() * (max - min) + min;
console.log(randomNumber);
