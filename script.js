// const firstName = document.querySelector("#firstname");
// const lastName = document.querySelector("#lastname");
// const business = document.querySelector("#business");
// const companyName = document.querySelector("#companyname");
// const jobTitle = document.querySelector("#jobtitle");
// const mobileNo = document.querySelector("#mobileno");
// const countryId = document.querySelector("#country");

const buttonBtn = document.querySelector("#btn");

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


buttonBtn.addEventListener("click", (event) => {
  alert("hello world");
});
