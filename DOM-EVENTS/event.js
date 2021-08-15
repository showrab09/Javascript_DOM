//by function calling
function justfunction() {
  const clicking = document.getElementById("clicking-method");
  clicking.innerText = "Hello There I am Showrab";
}
//direct
document.getElementById("direct").addEventListener("click", function () {
  const p = document.getElementById("clicking-method");
  p.innerText = "Ayyyo Whats up?";
});

//direct update

document.getElementById("update-name").addEventListener("click", function () {
  const nameField = document.getElementById("input-field");
  const p = document.getElementById("clicking-method");
  p.innerText = nameField.value;
  nameField.value = "";
});
