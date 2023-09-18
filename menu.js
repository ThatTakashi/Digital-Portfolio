/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

var x = document.getElementById("links");

function menu(y) {
    if (x.matches) { // If media query matches
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  
  var y = window.matchMedia("(max-width: 750px)")
  menu(y) // Call listener function at run time
  y.addListener(menu) // Attach listener function on state changes