const buttonRows = document.querySelectorAll(".buttonRow");
const editToggle = document.querySelector("#editToggle");
let clicked = false;

editToggle.addEventListener("click", function () {
  clicked = !clicked;
  if (buttonRows.length === 0) {
    console.error("No elements with class 'buttonRow' found.");
    return;
  }

  buttonRows.forEach((buttonRow) => {
    if (clicked) {
      buttonRow.classList.remove("hidden");
    } else {
      buttonRow.classList.add("hidden");
    }
  });
});
