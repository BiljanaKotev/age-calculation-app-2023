const yearInput = document.getElementById("year-input");
const years = document.getElementById("years");
let birthYear;
let currentYear = 2023;

yearInput.addEventListener("input", function () {
  years.textContent = getBirthYear(currentYear - birthYear);
});

function getBirthYear(age) {
  birthYear = yearInput.value;
  age = birthYear - currentYear;
  return age;
}

getBirthYear(1981);

console.log(getBirthYear(1981));
