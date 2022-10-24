const weatherSpan = document.querySelector('div#weather span:first-child')
const citySpan = document.querySelector('div#weather span:last-child')

function onGeoSuccess(position) {
  try {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        citySpan.innerText = data.name
        weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}`
      })
  } catch (e) {
    console.log(e)
  }
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
