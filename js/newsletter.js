(function () {

    emailjs.init({
        publicKey: "OF97tE8bS9OmSipME",
    });

    document.addEventListener("DOMContentLoaded", function () {

        const form = document.getElementById("newsletter-form");
        const message = document.getElementById("newsletter-message");

        if (!form) {
            console.error("Newsletter form not found");
            return;
        }

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            message.innerHTML = "Submitting...";
            message.style.color = "#000";

            emailjs.sendForm(
                "service_2026ikaron",
                "template_2026ikaron_n",
                form
            )

            .then(function () {

                message.innerHTML = "Subscription successful!";
                message.style.color = "green";

                form.reset();

                setTimeout(() => {
                    message.innerHTML = "";
                }, 5000);

            })

            .catch(function (error) {

                console.error("EmailJS Error:", error);

                message.innerHTML = "Failed to subscribe.";
                message.style.color = "red";

                setTimeout(() => {
                    message.innerHTML = "";
                }, 5000);

            });

        });

    });

})();