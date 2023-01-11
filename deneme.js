// Get the current year for the copyright
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Scroll to section when clicking on nav links
let navLinks = document.querySelectorAll("nav a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    let sectionId = this.getAttribute("href");
    let section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
}

// Show a modal with project details when clicking on project links
let projectLinks = document.querySelectorAll(".project-link");
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    let projectId = this.getAttribute("href");
    let projectModal = document.querySelector(projectId);
    projectModal.style.display = "block";
  });
}

// Close the modal when clicking on the close button
let closeButtons = document.querySelectorAll(".modal .close");
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    this.parentNode.style.display = "none";
  });
}
