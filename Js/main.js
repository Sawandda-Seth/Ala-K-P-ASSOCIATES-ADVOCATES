// MOBILE NAVIGATION MENU

// Get the hamburger menu button
const menuBtn = document.getElementById("menuBtn");
// Get the mobile menu container
const mobileMenu = document.getElementById("mobileMenu");

// Check and ensures that both elements exist
if (menuBtn && mobileMenu) {
    // when user clicks the hamburger icon opens/closes the mobile menu
    menuBtn.addEventListener("click", () => {

        // Toggle Tailwind's hidden class
       mobileMenu.classList.toggle("hidden");
    });
}

//Smooth scroll

// select all anchor tags that start with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    //add click listsner to each anchor
    anchor.addEventListener('click', function(e) {
        
        //Prevent default jump behavior
        e.preventDefault();

        //Get target element
        const target = document.querySelector(
            this.getAttribute("href")
        );

        // If target exists
        if (target) {

            // Scroll smoothly to target
            target.scrollIntoView ({
             behavior: "smooth"
        });
    }

  });

});

// current Year


// Select all elements with class year
const yearElements = document.querySelectorAll(".year");

// loop through and inserts current year each element
yearElements.forEach(year => {

    // Insert current year
    year.textContent =
    new Date().getFullYear();
});

// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () =>{

    // Select navbar
    const nav = document.querySelector("nav");
    
    //stop if navbar doesn't exist
    if (!nav) return;

    // add shadow after scrolling down
    if(window.scrollY > 50 ){

        nav.classList.add("shadow-2xl");


    } else{ 

        // Remove shadow when near top
        nav.classList.remove("shadow-2xl");
    }

});

// BACK TO TOP BUTTON

//create button element
const topBtn = document.createElement("button");

// Button text
topBtn.innerHTML = "↑";

// Tailwind classes for styling
topBtn.className = "fixed bottom-6 right-6 bg-secondary text-black px-4 py-2 rounded-full hidden z-50";

//Add button to page
document.body.appendChild(topBtn);

// Show button when scrolling down
window.addEventListener("scroll", () => {

    
    if (window.scrollY > 300)  {


        topBtn.classList.remove("hidden");
            
    } else {


        topBtn.classList.add("hidden");

    }
});

//Scroll to top when button is clicked
topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior: "smooth"
    });

});

// Practice Area Card Animation


// Select all cards
const cards = document.querySelectorAll(".shadow-lg");
//loop through cards
   cards.forEach(card => {
    
    // Hover effect
    card.addEventListener("mouseenter", () => {
        
        card.classList.add("scale-105");
  });

  // Remove hover effect
    card.addEventListener("mouseleave", () => {

        card.classlist.remove("scale-105");

       });

});

// ACTIVE NAVIGATION LINK

// Get current page URL
const currentPage = window.location.pathname.split("/").pop();

// Highlight active menu item
document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if (href.includes(currentPage)) {

        link.classList.add(
            "text-secondary",
            "font-bold"
        );

    }

});

// PAGE LOADER EFFECT
window.addEventListener("load", () => {

    document.body.classList.add(
        "opacity-100"
    );

});

