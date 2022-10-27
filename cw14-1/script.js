const reset = document.getElementById("reset");
reset.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("form").reset();
});
