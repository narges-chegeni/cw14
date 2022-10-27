const reset = document.getElementById("reset_");
reset.addEventListener("click", (event) => {
  document.getElementById("form").reset();
  event.preventDefault();
});
