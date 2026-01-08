// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill all required fields !");
    } else {
        alert("Thank you for reaching out 🌼 We will contact you soon.");
        this.reset();
    }
});

// CTA SCROLL
function scrollToContact() {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
}
