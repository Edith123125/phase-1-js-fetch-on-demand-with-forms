const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const input = document.querySelector("input#searchByID");
      const movieId = input.value;
  
      // Fetch the movie data
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          const title = document.querySelector("#movieTitle");
          const summary = document.querySelector("#movieSummary");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
            const title = document.querySelector("#movieTitle");
            const summary = document.querySelector("#movieSummary");
          
            if (title && summary) {
              title.innerText = "Error";
              summary.innerText = "Could not fetch movie details. Please try again with a valid ID.";
            } else {
              console.error("Movie detail elements are missing in the DOM.");
            }
          
            console.error("Fetch error:", error);
          });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  