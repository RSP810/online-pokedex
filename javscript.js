async function fetchdata() {
    try {
        const pokemonname = document.getElementById("inputpokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        if (!response.ok) {
            throw new Error("Could not find the Pokémon");
        }
        const data = await response.json();

        // Display the sprites
        document.getElementById("front-sprite").src = data.sprites.front_default;
        document.getElementById("back-sprite").src = data.sprites.back_default;

        // Display the details
        document.getElementById("name").textContent = data.name.toUpperCase();
        document.getElementById("type").textContent = data.types.map(type => type.type.name).join(", ");
        document.getElementById("height").textContent = `${data.height / 10} m`; // Convert decimeters to meters
        document.getElementById("weight").textContent = `${data.weight / 10} kg`; // Convert hectograms to kilograms

        // Make the details visible
        document.getElementById("pokemon-details").style.display = "grid";
    } catch (error) {
        console.error(error);
    }
}
