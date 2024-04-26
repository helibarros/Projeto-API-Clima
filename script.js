//2a42a4beada34a433fb388b3cb4081a9
//https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=2a42a4beada34a433fb388b3cb4081a9&lang=pt_br



// Variáveis e seleções de elementos 
const apiKey = "2a42a4beada34a433fb388b3cb4081a9"
const cityInput = document.querySelector("#city-input")
const searchBt = document.querySelector("#search")
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async (city) =>{
     const apiWheatertherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

     const res = await fetch(apiWheatertherURL);
     const data = await res.json();

     return data;

};

const showWeatherData = async(city) => {
     const data = await getWeatherData(city);

     cityElement.innerText = data.name;
     tempElement.innerText = parseInt(data.main.temp);
     descElement.innerText = data.weather[0].description;
     weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
     umidityElement.innerHTML = `${data.main.humidity}%`;
     windElement.innerHTML = `${data.wind.speed} km/h`;
};

//Eventos
searchBt.addEventListener("click" , (e) =>{
     e.preventDefault(); //evita o envio do formulário

     const city = cityInput.value;

     showWeatherData(city);
})

