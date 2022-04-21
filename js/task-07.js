const inputFonSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const changeText = () => {
  inputText.style.fontSize = `${inputFonSize.value}px`;
};

inputFonSize.addEventListener("input", changeText);
