fetch("./cartoons.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (posters) {
    let postersWrapperCartoons = document.querySelector("#data-output-cartoons");
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

      postersWrapperCartoons.innerHTML = output;

      //resetting the posterTags variable or else it will add previous posters tags too
      posterTags = "";
    }
  });

