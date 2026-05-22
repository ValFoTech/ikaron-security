(function () {

    emailjs.init({
        publicKey: "OF97tE8bS9OmSipME",
    });

})();


const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formMessage = document.getElementById("form-message");

function showMessage(html) {
    formMessage.innerHTML = html;

    setTimeout(() => {
        formMessage.innerHTML = "";
    }, 5000); // disappears after 5 seconds
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const formData = {
        name: form.name.value,
        email: form.email.value,
        title: form.title.value,
        message: form.message.value,
        time: new Date().toLocaleTimeString()
    };

    emailjs.send(
        "service_2026ikaron",
        "template_2026ikaron",
        formData
    )
    .then(() => {
        showMessage('<div class="alert alert-success">Message sent successfully!</div>');;
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        showMessage('<div class="alert alert-danger">Failed to send message.</div>');
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";
    });
});