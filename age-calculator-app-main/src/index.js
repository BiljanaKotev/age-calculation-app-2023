let yearInput = document.getElementById("year-input");
const years = document.getElementById("years");

let dayInput = document.getElementById("day-input");
let days = document.getElementById("days");

let monthInput = document.getElementById("month-input");
let months = document.getElementById("months");

let yearInputToNum = Number(yearInput.value);
let monthInputToNum = Number(monthInput.value);

const date = new Date();

let birthYear;
let birthMonth;
let birthDay;
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

yearInput.addEventListener("change", function () {
  if (yearInput.value > currentYear) {
    years.textContent = "--";
  } else {
    years.textContent = calculateAgeInYears(years);
  }
});

monthInput.addEventListener("change", function () {
  if (monthInput.value >= monthInput.min && monthInput.value <= monthInput.max) {
    months.textContent = calculateAgeInMonths(months);
  } else {
    months.textContent = "--";
  }
  if (monthInputToNum < 0) {
    monthInputToNum *= -1;
  }
});

dayInput.addEventListener("change", function () {
  if (dayInput.value < 1 || dayInput.value > 31) {
    days.textContent = "--";
  } else {
    days.textContent = calculateAgeInDays(days);
  }
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
