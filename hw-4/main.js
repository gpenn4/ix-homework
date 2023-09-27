const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

//display random movie explanation
let randomNumber = Math.floor((Math.random() * 11) + 1);
let movie = movies[randomNumber - 1];

let explanation = document.getElementById("explanation");
explanation.innerHTML = movie.explanation;

//submit button functionality -- compare input
let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let movieGuess = document.getElementById("movie-guess").value;

    for (i = 0; i <= 10; i++) {
        let result = document.getElementById("result");

        if (movieGuess.toLowerCase() == movie.title.toLowerCase()) {
          result.innerHTML = "Correct answer!";
          result.classList.remove("alert-danger")
          result.classList.add("alert-success")

        } else {result.innerHTML = "Wrong answer";
        result.classList.remove("alert-success");
        result.classList.add("alert-danger");
      }}
})

//hint button functionality
let hintButton = document.getElementById("hintButton");

hintButton.addEventListener('click', (e) => {
    document.getElementById("hint").innerHTML = movie.hint;
})


