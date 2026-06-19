// CONSULTATION BOOKING TESTS

// Group all consultation tests together
describe(
    "Consultation Booking Tests", () => {

         // Run before every test
        beforeEach(() => {

            // Create fake HTML form for testing
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

            // Clear localStorage before each test
               localStorage.clear();

        });

         // TEST 1: Form Exists

        test("Consultation form exists", () => {

            const form =
            document.getElementById("consultationForm");

            expect(form)
            .not.toBeNull();

        });

        // TEST 2: Practise Area  Exists
        test("Practice area exists", () => {

            expect(document.getElementById("practiceArea"

            )
        )
        .not.toBeNull();
        });

        // TEST 3: Name Field Exists
         test("Client name field exists", () => {

        expect(
            document.getElementById(
                "clientName"
            )
        ).not.toBeNull();

       });

       // TEST 4: Email Field Exists
       
       test("Client email field exists", () => {

        expect(
            document.getElementById(
                "clientEmail"
            )
        ).not.toBeNull();

       });

        // TEST 5: Phone Field Exists


    test("Client phone field exists", () => {

        expect(
            document.getElementById(
                "clientPhone"
            )
        ).not.toBeNull();

    });

    // TEST 6: Appointment Date Exists
    test("Appointment date field exists", () => {

        expect(
            document.getElementById(
                "appointmentDate"
            )
        ).not.toBeNull();

    });

     // TEST 7: Legal Issue Field Exists
    test("Legal issue textarea exists", () => {

        expect(
            document.getElementById(
                "legalIssue"
            )
        ).not.toBeNull();

    });
});