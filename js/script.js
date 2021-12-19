let lon;
let lat;
let temperature = document.querySelector(".degree");
let summary = document.querySelector(".desc");
let loc = document.querySelector(".city");
let icon = document.querySelector(".icon");
let date = document.querySelector('.day');
let img = document.querySelector('.logo');
const kelvin = 273;
const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


const d = new Date();
let monthName = month[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API ID
            const api = "f11ad62ac7b5cc7dbce12287bcbb8f61";

            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=f11ad62ac7b5cc7dbce12287bcbb8f61`;

            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;

                    date.innerText = monthName + ', ' + day + ' ' + year;

                    if (data.weather[0].description === "clear sky") {

                        img.innerHTML = '<img src="/img/2.png" alt="Logo" width="300">';
                    }
                    else if (data.weather[0].description === "rain") {

                        img.innerHTML = '<img src="/img/4.png" alt="Logo" width="300">';
                    }
                    else if (data.weather[0].description === "snow") {

                        img.innerHTML = '<img src="/img/3.png" alt="Logo" width="300">';
                    }
                    else {

                        img.innerHTML = '<img src="/img/1.png" alt="Logo" width="300">';
                    }


                });
        });
    }
});