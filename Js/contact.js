const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email|| !subject || !message) {
        alert("Please complece all fields.");
        return;
    }

    const contactData = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        createdAt: new Date().toLocaleString()
    };

    const messages =
    JSON.parse(
        localStorage.getItem("message")) || [];

        messages.push(contactData);
        localStorage.setItem(
            "message",
            JSON.stringify(messages)
        );

        alert("Message sent successfully.");
        contactForm.reset();

});