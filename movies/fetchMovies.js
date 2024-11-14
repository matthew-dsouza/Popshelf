fetch("./movies.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (posters) {
    let postersWrapperMovies = document.querySelector("#data-output-movies");
    let output = "";
    let posterTags = "";
    for (let poster of posters) {
      output += `
        <div>
        <img
          src="${poster.thumbnail}"
          alt=""
        />
      </div>
    `;

      postersWrapperMovies.innerHTML = output;

      //resetting the posterTags variable or else it will add previous posters tags too
      posterTags = "";
    }
  });

