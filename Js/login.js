// Get form
const loginForm = document.getElementById("loginForm");

// Listen for login
loginForm.addEventListener("submit", function(e){

    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Admin credentials
    if (
        email === "sethsawanda7@gmail.com" && 
        password === "SAWanda@123"   
    ) {
        
        localStorage.setItem ("userRole" , "admin");
        window.location.href ="admin/dashboard.html";

        return;
    }
    alert("Invalid login credentials");

    if (
        email === "sawandawork@gmail.com" &&
        password === "client123"

    ) {
        localStorage.setItem("userRole", "client");
        window.local.href = "html/client-portal.html";

        return;
    }

    //Registered Users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        user =>
            user.email === email &&
        user.password === password
    );
    if(user){

            localStorage.setItem(
                "userRole",
                "client"
            );

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );

            window.location.href =
            "html/client-portal.html";

            return;
        }

        alert(
            "Invalid email or password."
        );

    }
);


