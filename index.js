var leftMon = document.getElementById("left-input").value.toLowerCase().trim();
var rightMon = document.getElementById("right-input").value.toLowerCase().trim();

function getPokemonInfo(mon) {
    console.log("hello");
    fetch(`https://pokeapi.co/api/v2/pokemon/${mon}/`)
    .then(response => {
        response.json();
    }).then(data => console.log(data));
};

// append elements based on whether the search came from the right search or the left

document.getElementById("submit-right").addEventListener("click", getPokemonInfo);
document.getElementById("submit-left").addEventListener("click", getPokemonInfo);