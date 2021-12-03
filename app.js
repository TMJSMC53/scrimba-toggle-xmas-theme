const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");
const ball = document.querySelector(".ball");

christmasBtn.addEventListener("click", () => {
  body.classList.toggle("snow");

  if (greeting.innerHTML === "❄️ Let it snow! ❄️") {
    greeting.innerHTML = "🎅🏽 Merry Christmas";
  } else {
    greeting.innerHTML = "❄️ Let it snow! ❄️";
  }
});

// snowBtn.addEventListener("change", function () {
//   body.classList.toggle("christmas");
//   // body.classList.remove("snow");
//   greeting.innerText = "";
// });

// snowBtn.addEventListener("click", () => {
//   body.classList.add("snow");
//   body.classList.remove("christmas");
//   greeting.innerHTML = "❄️ Let it snow! ❄️";
// });

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.
