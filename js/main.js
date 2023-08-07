var navExpandBtn = document.getElementById("nav-expand-btn");
var navItems = document.getElementById("nav-items");
navItems.style.display = "none";
navExpandBtn.addEventListener("click", function() {
if (navItems.style.display === "none") {
    navItems.style.display = "block";
    navExpandBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
}
else {
    navItems.style.display = "none"
    navExpandBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
}
});