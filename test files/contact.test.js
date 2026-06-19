describe("Contact Form Tests", () => {

    beforeEach(() => {

        document.body.innerHTML = `
            <form id="contactForm">

                <input id="name">

                <input id="email">

                <input id="subject">

                <textarea id="message"></textarea>

            </form>
        `;

    });

    test("Contact form exists", () => {

        const form =
        document.getElementById(
            "contactForm"
        );

        expect(form)
        .not.toBeNull();

    });

    test("Name field exists", () => {

        expect(
            document.getElementById(
                "name"
            )
        ).not.toBeNull();

    });

    test("Email field exists", () => {

        expect(
            document.getElementById(
                "email"
            )
        ).not.toBeNull();

    });

});