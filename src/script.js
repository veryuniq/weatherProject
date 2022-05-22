let dateElement = document.querySelector(`#calendar-date`);
let currentTime = new Date();

function formatDate(date) {
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = currentTime.getDay();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let months = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  let day = days[dayIndex];

  return `${day} ${hours} ${minutes}`;
}

let speicalDate = document.querySelector(`#calendar-date`);
speicalDate.innerHTML = currentTime;

function displayWeatherCondition(response) {
  document.querySelector(`#location`).innerHTML = response.data.name;
  document.querySelector(`#temperature`).innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = `b1149ad7f60a925a73113df240601056
`;
  let city = document.querySelector(`#city-input`).value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(axios);
}

let searchForm = document.querySelector(`#search-form`);
searchForm.addEventListener(`submit`, search);
