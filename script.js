// TODO: grab
const buttons = document.querySelectorAll("button"); //[]
const input = document.getElementById("input-url"); //unique, 1
const btnUrl = document.querySelector("#btn-url");

// TODO: eventHandlers/callbacks

const handleBtnOver = (e) => {
  console.log(e.target);

  e.target.classList.add("hover");
};

const handleBtnOut = (e) => {
  console.log(e.target);

  e.target.classList.remove("hover");
};

const hasValue = () => {
  if (!input.value) {
    alert("Please enter URL");
  } else {
    alert(`The URL entered is: ${input.value}`);
  }
};

const handleInputFocus = (e) => {
  console.log(e.target);

  e.target.style.caretColor = "red";
};

// TODO: eventListeners

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", handleBtnOver);
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseout", handleBtnOut);
});

btnUrl.addEventListener("click", hasValue);

input.addEventListener("focus", handleInputFocus);
