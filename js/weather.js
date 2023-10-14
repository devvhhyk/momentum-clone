const API_KEY = "cc6d98dd86b02537c60ea7c325a340eb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      
    });
}

function onGeoError() {
  alert("현재 위치의 날씨를 가져올 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
