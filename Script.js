const apiEndpoint = 'https:                                           
const apiKey = '//api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';                             

document.getElementById('// Replace with your API key

document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('function getWeather() {
    const location = document.getElementById('location').value;
    const url = `${apiEndpoint}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
