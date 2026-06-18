describe(
    "Consultation Booking Tests", () => {
        beforeEach(() => {
            document.body.innerHTML = `
            <form id="consultationForm">
                    <input id="clientName">
                    <input id="clientEmail">
                    <input id="clientPhone">
                    <select id="practiceArea"></select>
                    <input id="appointmentDate">
                    <textarea id="legalIssue"></textarea>
                </form>
            `;
        });

        test("Consultation form exists", () => {

            const form =
            document.getElementById("consultationForm");

            expect(form)
            .not.toBeNull();

          }
        );
        test("Practice area exists", () => {

            expect(document.getElementById("practiceArea"

            )
        )
        .not.toBeNull();
        });

     }
);