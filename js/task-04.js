let counterValue = 0;
const refs = {
    valueEl: document.querySelector("#value"),
    buttonDecrement: document.querySelector("[data-action= 'decrement']"),
    buttonIncrement: document.querySelector("[data-action= 'increment']"),
    
}
const decrement = () => {
counterValue -= 1;
return (refs.valueEl.textContent = counterValue);
}
const increment = () => {
    counterValue += 1;
    return (refs.valueEl.textContent = counterValue);
}
refs.buttonDecrement.addEventListener('click', decrement);
refs.buttonIncrement.addEventListener('click', increment);
