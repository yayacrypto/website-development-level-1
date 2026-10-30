const button = document.querySelector("#complete-step");
const message = document.querySelector("#progress");

button.addEventListener("click", () => {
  message.textContent = "First step complete. Keep building!";
});
