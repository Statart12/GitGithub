document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = contactForm.querySelector(".form-status");
    const name = new FormData(contactForm).get("name").trim().split(" ")[0];

    status.textContent = `Thanks, ${name}. Your note is ready for the Lumina team.`;
    contactForm.reset();
  });
}
