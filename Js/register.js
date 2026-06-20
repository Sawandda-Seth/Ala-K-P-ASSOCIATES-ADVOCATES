const registerForm = document.getElementById("registerForm");

registerForm.addEventListener( "submit",function(e){

        e.preventDefault();

        const fullName = document.getElementById( "fullName" ).value;
        const email = document.getElementById( "email").value;
        const password = document.getElementById("password" ).value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(
            password !==
            confirmPassword
        ){

            alert(
                "Passwords do not match."
            );

            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser =users.find(
            user =>
            user.email === email
        );

        if(existingUser){

            alert(
                "Account already exists."
            );

            return;
        }

        const newUser = {

            id: Date.now(),
            fullName,
            email,
            password,
            role: "client"

        };

        users.push(
            newUser
        );

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert(
            "Account created successfully."
        );

        window.location.href =
        "login.html";

    }
);