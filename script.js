


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("mainSidebar").style.marginLeft = "250px";
// }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("mainSidebar").style.marginLeft = "0";
// }




           //pagination
// Get the container element
var page = document.getElementById("pagination");

// Get all buttons with class="btn" inside the container
var btns = page.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var dir = page.getElementsByClassName("dir");













//an if statement to check for an active nav class and add the nav-active bar