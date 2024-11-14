fetch("./anime.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (posters) {
    let postersWrapperAnime = document.querySelector("#data-output-anime");
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

      postersWrapperAnime.innerHTML = output;

      //resetting the posterTags variable or else it will add previous posters tags too
      posterTags = "";
    }
  });

