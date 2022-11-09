// global variable declaration start here
const form = document.querySelector(".form"),
  input = document.querySelector(".movie-input"),
  movieBox = document.querySelector(".movie-data"),
  error = document.querySelector(".error");
let movieVal;
// global variable declaration end here

// form event and validation strat here
form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputVal = input.value;
  if (inputVal == "") {
    error.innerText = "*field is required"
    error.classList.add("fail");
    input.classList.add("fail");
  } else {
    hide();
    MovieFilter();
  }
});

input.addEventListener("keyup", () => {
 if(input.value !=""){
  hide();
 }
  MovieFilter();
})

// function for removing error
function hide(){
  error.classList.remove("fail");
  input.classList.remove("fail");
}
// form event and validation end here

// movie object start here

const movie = [
  {
    releaseDate: "20/12/2019",
    movieName: "Zero",
    actorName: "Shah Rukh Khan"
  },
  {
    releaseDate: "17/07/2015",
    movieName: "Bajrangi Bhai Jan",
    actorName: "Salman Khan"
  },

  {
    releaseDate: "25/07/2014",
    movieName: "PK",
    actorName: "Amir Khan"
  },
  {
    releaseDate: "20/12/2019",
    movieName: "Thugs of Hindostan",
    actorName: "Amir Khan"
  },
  {
    releaseDate: "18/09/2009",
    movieName: "Wanted",
    actorName: "Salman Khan"
  },
  {
    releaseDate: "17/07/2015",
    movieName: "Dilwale",
    actorName: "Shah Rukh Khan"
  },
  {
    releaseDate: "25/07/2017",
    movieName: "Raees",
    actorName: "Shah Rukh Khan"
  },
  {
    releaseDate: "25/07/2014",
    movieName: "Kick",
    actorName: "Salman Khan"
  },
  {
    releaseDate: "18/09/2009",
    movieName: "3 Idiots",
    actorName: "Amir Khan"
  },
  {
    releaseDate: "25/07/2014",
    movieName: "PK",
    actorName: "Amir Khan"
  }

];
// initial call to show movie data
showData(movie);
// function for creating movie data start here
function showData(movie) {
  const movieList = document.createElement("ul");
  movieList.className = "data-list movie-list";
  movie.forEach(function (element, index) {
    const movieItem = document.createElement("li");
    movieItem.className = "movie-item";
    movieItem.innerHTML = `<ul class="movie-data">
        <li class="data-item">Movie Name: ${element.movieName}</li>
        <li class="data-item">Release Date: ${element.releaseDate}</li>
        <li class="data-item">Actor Name: ${element.actorName}</li>
        </ul>`;
    movieList.appendChild(movieItem);
    movieBox.appendChild(movieList);
  });
};
// function for creating movie data end here

// function for filtering movie data start here
function MovieFilter() {
  const result = movie.filter(function (movie) {
    return (movie.movieName.toLowerCase().includes(input.value.toLowerCase()) ||
      movie.releaseDate.toLowerCase().includes(input.value.toLowerCase()) ||
      movie.actorName.toLowerCase().includes(input.value.toLowerCase()));
  });
  movieBox.innerHTML = "";
  if (result != "") {
    showData(result);
  } else {
    movieNotFound();
  }
}
// function for filtering movie data start here

// function for showing movies not found start here
function movieNotFound() {
  const notFound = document.createElement("span");
  notFound.className = "not-found";
  notFound.innerText = "Movies Not Found...!";
  movieBox.appendChild(notFound)
};
// function for showing movies not found end here