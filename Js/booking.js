
const consultationForm = document.getElementById("consultationForm");

consultationForm.addEventListener("submit",
    function (e){

        e.preventDefault();
        const appointment ={
            id: Date.now(),
            name: document.getElementById("clientName").value,
            email: document.getElementById("clientEmail").value,
            phone:document.getElementById("clientPhone").value,
            practiceArea: document.getElementById("practiceArea").value,
            appointmentDate: document.getElementById("appointmentDate").value,
            legalIssue: document.getElementById("legalIssue").value,
            createdAt: new Date().toLocaleDateString()
        };
        const appointments =
        JSON.parse(
            localStorage.getItem("appointments")
        )|| [];

        appointments.push(
            appointment
        );

        localStorage.setItem("appointments",
            JSON.stringify(appointments)
        );

        alert("Consultation booked successfully.");
        consultationForm.reset();
    }
);

