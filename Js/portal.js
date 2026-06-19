// Get contact Form


// Find the form with unique id
const contactForm = document.getElementById("contactForm");

//Listens for form submission

//when the user submits the form
contactForm.addEventListener("submit", function (e) {

    // Prevent page refresh
    e.preventDefault();

    // Get user inputs

    // Get name and remove extra spaces
    const name = document.getElementById("name").value.trim();

    // Get email and remove extra spaces
    const email = document.getElementById("email").value.trim();

    //Get subject and remove extra spaces
    const subject = document.getElementById("subject").value.trim();

    //Get message and remove extra spaces
    const message = document.getElementById("message").value.trim();

    // Validate Inputs

    // Check if any field is empty
    if(!name || !email|| !subject || !message) {

        // Show error message
        alert("Please complete all fields.");

        // Stop code execution
        return;
    }

    // Create contact object

    const contactData = {

        //Unigue ID
        id: Date.now(),

        // User info
        name,
        email,
        subject,
        message,

        // Date and time submitted
        createdAt: new Date().toLocaleString()

    };

    // Get exsiting Messages

    const messages =
    JSON.parse(
        localStorage.getItem("message")) || [];
        
        // Add new message
        messages.push(contactData);

        // Save to local storage 
        localStorage.setItem(
            "message",
            JSON.stringify(messages)
        );

        //Success message
        alert("Message sent successfully.");
        contactForm.reset();

});