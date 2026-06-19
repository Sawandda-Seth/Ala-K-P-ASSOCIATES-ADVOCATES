// Get the contact form element from the HTML
const contactForm = document.getElementById("contactForm");

// Listen for the form submission event
contactForm.addEventListener("submit", function (e) {

     // Prevent the form from refreshing the page
    e.preventDefault();
    
    // Get the user's name and remove extra spaces
    const name = document.getElementById("name").value.trim();

    // Get the user's email and remove extra spaces
    const email = document.getElementById("email").value.trim();

    // Get the user's subject and remove extra spaces
    const subject = document.getElementById("subject").value.trim();

    // Get the user's message and remove extra spaces
    const message = document.getElementById("message").value.trim();

    // check if any field is empty
    if(!name || !email|| !subject || !message) {

        //show an error message
        alert("Please complece all fields.");

        // stop the code from running further
        return;
    }
    
    // Create an object to store contact form data
    const contactData = {

        // generate a unique ID using the current timestamp
        id: Date.now(),

        //stores user's data
        name,
        email,
        subject,
        message,

        // store the data and time the form was submitted
        createdAt: new Date().toLocaleString()
    };

    // Retrieve exsiting messages from localStorage
    const messages =
    JSON.parse(

        localStorage.getItem("message")) || [];

        // Add the new contact message to the array
        messages.push(contactData);

        //save the updated array into local storage
        localStorage.setItem(
            "message",
            JSON.stringify(messages)
        );

        // Notify the user that the message was sent successfully
        alert("Message sent successfully.");

        //Clear all form fields
        contactForm.reset();

});