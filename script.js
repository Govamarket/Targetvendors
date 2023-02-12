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
  
  
        // Initialize and add the map
        function initMap() {
  
          // The location of Geeksforgeeks office
          const gfg_office = {
              lat: 28.50231,
              lng: 77.40548
          };

          // Create the map, centered at gfg_office
          const map = new google.maps.Map(
                  document.getElementById("map"), {

              // Set the zoom of the map
              zoom: 17.56,
              center: gfg_office,
          });
      }