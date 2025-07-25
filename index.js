function showMessage() {
  alert("Thanks for visiting MySite!");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
  } else {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  }
});
