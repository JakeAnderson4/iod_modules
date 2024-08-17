async function listOfMovies() {
  try {
    const apiKey = "95696341";
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=lion`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const list = await response.json();
    console.log(list);
    list.map((mov) => {
      createCard(movieList, mov.Title, mov.Year);
    });
    // return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

listOfMovies();