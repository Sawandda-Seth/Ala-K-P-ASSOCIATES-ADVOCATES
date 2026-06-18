const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click" , () => {
    mobileMenu.classList.toggle("hidden");
});

//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        )
        .scrollTntoView({
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