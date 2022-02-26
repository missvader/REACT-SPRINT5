const $btnJoke = document.getElementById("btn");
const $randomJoke = document.getElementById("random-joke");
const $textWeather = document.getElementById("weather");
//Fetch API dadjoke
let resultJoke;
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
  let randomJoke = {
    joke: resultJoke,
    score: userScore,
    date: new Date().toISOString() 
  }
  reportAcudits.push(randomJoke);
  console.log(reportAcudits);
}
//Fetch API ChuckNorris
let resultChuck;
async function getChuckJoke(){
  const result = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await result.json();
  resultJoke = json.value;
  $randomJoke.textContent = resultJoke;
}
//random number to decide between APIS
const fetchJoke = () => {
  let randomNumber= Math.round(Math.random()*10);
  let randomJoke = (randomNumber >5) ? getChuckJoke() : getJoke();
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
$btnJoke.addEventListener("click" , fetchJoke);


