//accedemos al DOM y creamos un listener para button
const $btn = document.getElementById("btn");
const $randomJoke = document.getElementById("random-joke");
$btn.addEventListener("click" ,getJoke);
//funcion asincrona que llama a API y muestra en pantalla
async function getJoke() {
  const result = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      'Accept': 'application/json'
    }
  })
  const json = await result.json();
  $randomJoke.textContent = json.joke;
}
