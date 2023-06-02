const elements = document.querySelectorAll(".body, .big-element, .small-element");
const toggleButton = document.getElementById("theme2");
let currentColor = "blue";

toggleButton.addEventListener("click", function() {
  elements.forEach(element => {
    const classList = Array.from(element.classList);
    const colorClass = classList.find(c => c === "blue" || c === "red" || c === "yellow");
    element.classList.remove(colorClass);
    element.classList.add(currentColor === "blue" ? "red" : currentColor === "red" ? "yellow" : "blue");
  });
  currentColor = currentColor === "blue" ? "red" : currentColor === "red" ? "yellow" : "blue";
});