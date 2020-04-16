const form = document.querySelector('form');
const password = document.querySelector('.password');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("/api/create-password", {
    method: "POST",
    body: new FormData(this)
  })
    .then(resp => resp.text())
    .then(data => password.textContent = data)
});
