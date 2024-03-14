var inputvalue = document.querySelector('#cityinput');
var submitBtn = document.querySelector('#submitBtn'); // Renamed to avoid conflict
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "350fb089322c814f3a153413f6c6eaf2";

function convertion(val) {
    return (val - 273).toFixed(3);
}

submitBtn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descripVal = data['weather'][0]['description']; // Renamed variable
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descripVal}</span>`; // Renamed variable
        wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('You entered a wrong city name'));
});