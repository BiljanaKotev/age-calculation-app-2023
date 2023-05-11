const yearInput = document.getElementById("year-input");
const years = document.getElementById("years");

const dayInput = document.getElementById("day-input");
const days = document.getElementById("days");

const monthInput = document.getElementById("month-input");
const months = document.getElementById("months");
console.log(typeof months);
const date = new Date();

let birthYear;
let birthMonth;
let birthDay;
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

yearInput.addEventListener("change", function () {
  if (yearInput.value > currentYear) {
    alert("Year cannot be in the future");
  } else {
    years.textContent = calculateAgeInYears(years);
  }
});

monthInput.addEventListener("change", function () {
  if (monthInput.value >= monthInput.min && monthInput.value <= monthInput.max) {
    months.textContent = calculateAgeInMonths(months);
  } else {
    alert("Minimum date should be entered as 01 & Maximum date should be entered as 12");
  }
  if (months.value > 0) {
    months.value * -1;
  }
});

dayInput.addEventListener("change", function () {
  days.textContent = calculateAgeInDays(days);
});

function calculateAgeInYears(years) {
  birthYear = yearInput.value;
  years = currentYear - birthYear;
  return years;
}

function calculateAgeInMonths(months) {
  birthMonth = monthInput.value;
  months = currentMonth - birthMonth;
  return months;
}

function calculateAgeInDays(days) {
  birthDay = dayInput.value;
  days = currentDay - birthDay;
  return days;
}
