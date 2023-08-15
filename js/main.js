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


registrationButton.addEventListener("click", function () {

});

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


