// dashboard statistics

const appointments =
JSON.parse(
    localStorage.getItem("appointments")
) || [];

const messages =
JSON.parse(
    localStorage.getItem("messages")
) || [];

// Dashboard Page

const appointmentCount = document.getElementById("appointmentCount");
const messageCount= document.getElementById("messageCount");

if (appointmentCount) {

    appointmentCount.textContent =
    appointments.length;

}

if (messageCount) {

    messageCount.textContent =
    messages.length;

}

// Recent Appointments

const recentAppointments =
document.getElementById("recentAppointments");

if (recentAppointments) {

    recentAppointments.innerHTML = appointments
    .slice(-5)
    .reverves()
    .map(appointment => `
        <div class="border-b py-4">

            <h4 class="font-bold">
                ${appointment.name}
            </h4>

            <p>
                ${appointment.practiceArea}
            </p>

            <p>
                ${appointment.appointmentDate}
            </p>

        </div>
        `)
        .join ("");
}

// Appointments Page

const appointmentsContainer = document.getElementById("appointmentsContainer");

if (appointmentsContainer) {

    appointmentsContainer.innerHTML = appointments
    .map(appointment => `
        <div class="bg-white rounded-xl shadow p-6">

            <h3 class="font-bold text-xl mb-3">
                ${appointment.name}
            </h3>

            <p>
                ${appointment.email}
            </p>

            <p>
                ${appointment.phone}
            </p>

            <p class="mt-3">
                ${appointment.practiceArea}
            </p>

            <p>
                ${appointment.appointmentDate}
            </p>

            <button
                onclick="deleteAppointment(${appointment.id})"
                class="mt-5 bg-red-500 text-white px-4 py-2 rounded">

                Delete

            </button>

        </div>
        `)

        .join("");
        
}

function deleteAppointment(id) {

    const updatedAppointments =
    appointments.filter(
        appointment =>
            appointment.id !== id
    );

    localStorage.setItem(
        "appontments"
        JSON.stringify(updatedAppointments)

    );

    location.reload();

}