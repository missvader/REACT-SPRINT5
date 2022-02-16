const $btn = document.getElementById("btn");
const $randomJoke = document.getElementById("random-joke");
const $starRating = document.getElementsByClassName("rating");
const $textWeather = document.getElementById("weather");
//Fetch API dadjoke
let resultJoke;
$btn.addEventListener("click" ,getJoke);
async function getJoke() {
  const result = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      'Accept': 'application/json'
    }
  })
  const json = await result.json();
  resultJoke = json.joke;
  $randomJoke.textContent = resultJoke;
}
//create array acudits and rateJoke()
let reportAcudits = [];
function rateJoke(userScore){
  let dadJoke = {
    joke: resultJoke,
    score: userScore,
    date: new Date().toISOString() 
  }
  reportAcudits.push(dadJoke);
  console.log(reportAcudits);
}
//fetch a API OpenWeatherMap
let resultWeather;
async function getWeather(){
  const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=2d7e65cf09c54b1e66576f39ba4531d4&units=metric&lang=ca") ;
  const json = await result.json();
  resultWeather = json.weather[0].description;
  console.log(resultWeather);
  $textWeather.textContent = `Avui : ${resultWeather}`;
}
window.addEventListener("load", getWeather);


