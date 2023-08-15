//Declaring Variables
var navExpandBtn = document.getElementById("nav-expand-btn");
var navItems = document.getElementById("nav-items");
var navLinks = document.getElementsByClassName("nav-links");
var allTopics = document.getElementById("all-topics");
var businessSchedule = document.getElementById("business-schedule");
var engineerSchedule = document.getElementById("engineer-schedule");
var growthSchedule = document.getElementById("growth-schedule");
var platformSchedule = document.getElementById("platform-schedule");
var homeBody = document.getElementById("home-body");
var aboutBody = document.getElementById("about-body");
var speakersBody = document.getElementById("speakers-body");
var venueBody = document.getElementById("venue-body");
var scheduleBody = document.getElementById("schedule-body");
var sponsorsBody = document.getElementById("sponsors-body");
var registrationBody = document.getElementById("registration-body");
var homeButton = document.getElementById("homePage");
var aboutButton = document.getElementById("aboutPage");
var speakersButton = document.getElementById("speakersPage");
var venueButton = document.getElementById("venuePage");
var scheduleButton = document.getElementById("schedulePage");
var sponsorsButton = document.getElementById("sponsorsPage");
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

//Changing the page contents based on the navigation items clicked
homeBody.classList.add("show");
homeButton.addEventListener("click", function () {
  homeBody.classList.add("show");
  homeBody.classList.remove("hide");
  aboutBody.classList.add("hide");
  speakersBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  sponsorsBody.classList.add("hide");
  registrationBody.classList.add("hide");
  venueBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

aboutButton.addEventListener("click", function () {
  aboutBody.classList.add("show");
  aboutBody.classList.remove("hide");
  homeBody.classList.add("hide");
  speakersBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  sponsorsBody.classList.add("hide");
  registrationBody.classList.add("hide");
  venueBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

speakersButton.addEventListener("click", function () {
  speakersBody.classList.add("show");
  speakersBody.classList.remove("hide");
  aboutBody.classList.add("hide");
  homeBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  sponsorsBody.classList.add("hide");
  registrationBody.classList.add("hide");
  venueBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

sponsorsButton.addEventListener("click", function () {
  sponsorsBody.classList.add("show");
  sponsorsBody.classList.remove("hide");
  aboutBody.classList.add("hide");
  homeBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  speakersBody.classList.add("hide");
  registrationBody.classList.add("hide");
  venueBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

registrationButton.addEventListener("click", function () {
  registrationBody.classList.add("show");
  registrationBody.classList.remove("hide");
  aboutBody.classList.add("hide");
  homeBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  speakersBody.classList.add("hide");
  sponsorsBody.classList.add("hide");
  venueBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

venueButton.addEventListener("click", function () {
  venueBody.classList.add("show");
  venueBody.classList.remove("hide");
  aboutBody.classList.add("hide");
  homeBody.classList.add("hide");
  scheduleBody.classList.add("hide");
  speakersBody.classList.add("hide");
  sponsorsBody.classList.add("hide");
  registrationBody.classList.add("hide");
  navItems.style.display = "none";
  navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
});

scheduleButton.addEventListener("click", function () {
    scheduleBody.classList.add("show");
    scheduleBody.classList.remove("hide");
    aboutBody.classList.add("hide");
    homeBody.classList.add("hide");
    registrationBody.classList.add("hide");
    speakersBody.classList.add("hide");
    venueBody.classList.add("hide");
    navItems.style.display = "none";
    navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
// function changePage(bodyToOpen, arrayNum) {
//     navLinks[arrayNum].addEventListener("click", function(){

//     })
// }

// aboutBody
