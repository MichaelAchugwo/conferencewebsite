//Declaring Variables
var navExpandBtn = document.getElementById("nav-expand-btn");
var navItems = document.getElementById("nav-items");
var navLinks = document.getElementsByClassName("nav-links");
var homeBody = document.getElementById("home-body");
var aboutBody = document.getElementById("about-body");
var speakersBody = document.getElementById("speakers-body");
var venueBody = document.getElementById("venue-body");
var scheduleBody = document.getElementById("schedule-body");
var registrationBody = document.getElementById("registration-body");
var homeButton = document.getElementById("homePage");
var aboutButton = document.getElementById("aboutPage");
var speakersButton = document.getElementById("speakersPage");
var venueButton = document.getElementById("venuePage");
var scheduleButton = document.getElementById("schedulePage");
var registrationButton = document.getElementById("registrationPage");
var regButton = document.getElementsByClassName("buy-ticket");
var body = document.getElementById("body");

//Making the navbar responsive
navItems.style.display = "none";
navExpandBtn.addEventListener("click", function () {
  if (navItems.style.display === "none") {
    navItems.style.display = "block";
    navExpandBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    navItems.style.display = "none";
    navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

//Making page scroll to content based on the nav item clicked
homeButton.addEventListener("click", function () {
  homeBody.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

aboutButton.addEventListener("click", function () {
  aboutBody.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

speakersButton.addEventListener("click", function () {
  speakersBody.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

scheduleButton.addEventListener("click", function () {
  scheduleBody.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

venueButton.addEventListener("click", function () {
  venueBody.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

//Adding Registration Overlay functionality
function openNav() {
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("myOverlay").style.border = "5px solid aqua";
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  body.style.backgroundColor = "black";
  body.style.opacity = "0.7"
  
}

function closeNav() {
  document.getElementById("myOverlay").style.display = "none";
  body.style.background = "black";
  body.style.opacity = "1.0";
}


