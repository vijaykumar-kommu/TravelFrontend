document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    // Show spinner
    spinner.classList.remove("hidden");

    // Fake submit delay
    setTimeout(() => {
      spinner.classList.add("hidden");
      alert("🎉 Booking submitted successfully!");
      form.reset();
    }, 2000);
  });

function validateForm() {
  let valid = true;
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  inputs.forEach((input) => {
    const errorSpan = input.parentElement.querySelector(".error-message");
    input.classList.remove("shake", "valid");

    if (!input.value.trim()) {
      errorSpan.textContent = "This field is required.";
      input.classList.add("shake");
      valid = false;
    } else {
      errorSpan.textContent = "";
      input.classList.add("valid");
    }
  });

  // Remove shake class after animation
  setTimeout(() => {
    inputs.forEach((input) => input.classList.remove("shake"));
  }, 400);

  return valid;
}
});
