//accedemos al DOM y creamos un listener para button
const $btn = document.getElementById("btn");
const $randomJoke = document.getElementById("random-joke");
const $starRating = document.getElementsByClassName("rating");
$btn.addEventListener("click" ,getJoke);
//funcion asincrona que llama a API y muestra en pantalla
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
const $rating = getElementsByClassName("rating");
if($rating){
  $rating.addEventListener("click", rateJoke);
}
function rateJoke(userScore){
  let dadJoke = {
    joke: resultJoke,
    score: userScore,
    date: new Date().toISOString()
  }
  reportAcudits.push(dadJoke);
  console.log(reportAcudits);
}




