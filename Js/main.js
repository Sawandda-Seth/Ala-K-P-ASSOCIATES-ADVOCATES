const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
       mobileMenu.classList.toggle("hidden");
    });
}

//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        )
        .scrollIntoView({
            behavior: 'smooth'
        });

    });
});

// current Year

const yearElements =
document.querySelectorAll(".year");

yearElements.forEach(year => {
    year.textContent =
    new Date().getFullYear();
});