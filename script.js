const convertButton = document.querySelector(".convertButton");
const lengthP = document.querySelector(".lengthP");
const volumeP = document.querySelector(".volumeP");
const massP = document.querySelector(".massP");
const input = document.querySelector("input");

let inputValue;
convertButton.addEventListener("click", function () {
    inputValue = input.value;
    lengthP.textContent = `${inputValue} meters = ${(3.281 * inputValue).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
    volumeP.textContent = `${inputValue} liters = ${(0.264 * inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;
    massP.textContent = `${inputValue} kilograms = ${(2.204 * inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`;
});