



function getPokemonInfo(e) {
    e.preventDefault();
    // add conditional to prevent bad fetch request with empty string values from left & right mons
    var leftMon = document.getElementById("left-input").value.toLowerCase().trim();
    var rightMon = document.getElementById("right-input").value.toLowerCase().trim();
    let mon;
    if(e.target === document.getElementById("submit-right")) { //verfy which search bar is used to validate values
        mon = rightMon;
    } else if (e.target === document.getElementById("submit-left")) {
        mon = leftMon;
    }
    console.log(mon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${mon}/`, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "same-origin",
    })
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        let pokeObject = {
            name: data.name ,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat ,
            def: data.stats[2].base_stat ,
            spAtk: data.stats[3].base_stat ,
            spDef: data.stats[4].base_stat ,
            spe: data.stats[5].base_stat
        };
        console.log(pokeObject);
        // pass this object to some function to display
        // perhaps place a conditional to display on either left or right search
        if (mon === rightMon) {
            // function to display stats on right side
        } else if (mon === leftMon) {
            // function to display stats on left side
        } else {
            alert("conditional isn't working properly")
        }
    }).catch(err => {
        console.log(err)
    });
};

// append elements based on whether the search came from the right search or the left

//add error handling to prevent "empty" fetches

document.getElementById("submit-right").addEventListener("click", getPokemonInfo);
document.getElementById("submit-left").addEventListener("click", getPokemonInfo);