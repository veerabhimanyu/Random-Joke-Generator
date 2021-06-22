const button = document.querySelector(".btn");

const jokeText = document.querySelector(".para");

button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  console.log(jokeObj.joke);

  jokeText.innerHTML = `${jokeObj.joke}`;
}
