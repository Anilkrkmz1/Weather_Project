const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    
    const cityName = cityInput.value
    // console.log(cityName)
    getData(cityName)
})
function getData(name){
    const API = "c4cd7dcef3eadaea2c7526885af5b841";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
    
    // console.log(fetch(baseURL))
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const {name, sys:{country}, main: {temp, feels_like, humidity}, weather: [{description}], wind:{speed}} = data;
        // console.log(name, country, temp, feels_like, humidity, description, speed)

        // VERİLERİ JS ÇEKME
        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")
        console.log(city, temperature, hum, wind, weatherDesc, feeling)

        // JS'E ÇEKTİĞİMİZ ELEMANLARI YERİNE YERLEŞTİRME
        city.textContent = `${name}, ${country}`
        temperature.innerText = `${temp.toFixed(0)}°`
        hum.textContent = `Nem : % ${humidity}`
        wind.innerHTML = `Rüzgar : ${speed}km/s`
        weatherDesc.innerHTML = `${description}`
        feeling.textContent = `Hissedilen : ${feels_like}`
})
.catch(err => console.log(err))

cityInput.value = "";
cityInput.focus();
}