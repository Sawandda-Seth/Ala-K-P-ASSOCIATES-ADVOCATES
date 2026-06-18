const appointments =
 JSON.parse(localStorage.getItem ("appointments")) || [];

 const clientAppointments =
 document.getElementById("clientAppointments");

 if (
    appointments.length == 0

 ) {
    clientAppointments.innerHTML = `
    <p class="text-gray-500">
            No appointments found.
    </p>
    `;
 } else {

    clientAppointments.innerHTML = appointments
    .map(appointment => `
        <div class="border rounded-lg p-5 mb-4">

            <h3 class="font-bold text-lg">
                ${appointment.practiceArea}
            </h3>

            <p>
                ${appointment.appointmentDate}
            </p>

            <p>
                ${appointment.name}
            </p>

        </div>
        `)
        .join("");
 }