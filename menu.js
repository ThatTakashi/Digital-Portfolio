/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    if (mobile_links.style.display === "flex") {
      mobile_links.style.display = "none";
    } else {
      mobile_links.style.display = "flex";
    }
  }

var mobile_links = document.getElementById("links");

function mobile_menu(y) {
    if (mobile_links.matches) { // If media query matches
      mobile_links.style.display = "none";
    } else {
      mobile_links.style.display = "none";
    }
  }
  
  var y = window.matchMedia("(max-width: 750px)")
  mobile_menu(y) // Call listener function at run time
  y.addListener(mobile_menu) // Attach listener function on state changes