// Init weather bject
const weather = new Weather('Boston', 'MA');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}
