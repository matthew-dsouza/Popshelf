fetch("./series.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (posters) {
    let postersWrapperSeries = document.querySelector("#data-output-series");
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

      postersWrapperSeries.innerHTML = output;

      //resetting the posterTags variable or else it will add previous posters tags too
      posterTags = "";
    }
  });

