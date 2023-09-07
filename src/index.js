const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = form.checkValidity() ? "Form is valid" : "Form is invalid";

    console.log(message);
    form.classList.add("validated");
  });
});
