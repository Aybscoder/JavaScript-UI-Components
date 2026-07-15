// =========================
// Navbar Toggle
// =========================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

function toggleNavbar() {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

}

menuBtn.addEventListener("click", toggleNavbar);

// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});

// =========================
// Modal
// =========================

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeModal();
    }

});

// =========================
// Tabs
// =========================

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function switchTab(event) {

    const selectedTab = event.target.dataset.tab;

    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    tabContents.forEach(content => {
        content.classList.remove("active");
    });

    event.target.classList.add("active");

    document
        .getElementById(selectedTab)
        .classList.add("active");

}

tabButtons.forEach(button => {
    button.addEventListener("click", switchTab);
});