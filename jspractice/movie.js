const apiKey = '87c30911'; //Retrieve an API
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;


class Movie {
  constructor(title, year, poster) {
      this.title = title;
      this.year = year;
      this.poster = poster;
  }
}

async function fetchMovies(query = "Initial D") {
  const response = await fetch(`${apiUrl}&s=${query}`);
  const data = await response.json();
  if (data.Response === "True") {
      return data.Search.map(movie => new Movie(movie.Title, movie.Year, movie.Poster));
  } else {
      return [];
  }
}

//a function that will show the movies on the webpage once the API has been fetched 
function displayMovies(movies) {
  const movieContainer = document.getElementById('movieContainer');
  movieContainer.innerHTML = ''; // Clear previous results

  movies.forEach(movie => {
      const movieCard = `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                  <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <p class="card-text">${movie.year}</p>
                  </div>
              </div>
          </div>
      `;
      movieContainer.innerHTML += movieCard;
  });
}

//  this event lister will call the searchMovie function 

document.getElementById('searchInput').addEventListener('input', searchMovies);

async function searchMovies() {
    const query = document.getElementById('searchInput').value; // Get the user input
    const movies = await fetchMovies(query); // Fetch movies based on user input
    displayMovies(movies); // Display the fetched movies
}

//this function will display some movies when the page first load
async function init() {
  const movies = await fetchMovies(); // Fetch initial movies
  displayMovies(movies); // Display initial movies
}

init(); // Call the init function when the script loads

//This can sort movies by release year and export the movie list as a JSON file 

document.getElementById('sortButton').addEventListener('click', sortMovies);

async function sortMovies() {
    const movies = await fetchMovies(document.getElementById('searchInput').value); // Fetch movies based on current search
    const sortedMovies = movies.sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort movies by year
    displayMovies(sortedMovies); // Display sorted movies
}


document.getElementById('sortButtonAlpha').addEventListener('click', sortMoviesAlphabetically);

async function sortMoviesAlphabetically() {
  const movies = await fetchMovies(document.getElementById('searchInput').value);
  const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
  displayMovies(sortedMovies);
}



document.getElementById('exportButton').addEventListener('click', exportMovies);

async function exportMovies() {
    const movies = await fetchMovies(document.getElementById('searchInput').value); // Fetch movies based on current search
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(movies));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "movies.json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}