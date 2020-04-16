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

password.addEventListener("click", function() {
  if (this.textContent === '') return;

  copyToClipboard(this.textContent);

  this.textContent = "Copied";
  this.classList.add("transparent");

  setTimeout(() => {
    this.textContent = "";
    this.classList.remove("transparent");
  }, 1000);
});


function copyToClipboard(str) {
  const input = document.createElement("input");
  input.value = str;
  input.style.height = "0px";
  document.body.appendChild(input);
  
  input.select();
  input.setSelectionRange(0, 99999);

  document.execCommand("copy");
  input.remove()
}
