// --- 1. The Drinks Database ---
let cocktailDatabase = [...cocktailDatabase];



// --- 2. Variables & Event Listeners ---
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

// Attach the search function to the button click
searchButton.addEventListener('click', performSearch);
// Allow searching by pressing 'Enter' in the input field
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});


// --- 3. Search Function Logic ---

function performSearch() {
    // Get the user's input and convert it to lower case for case-insensitive search
    const query = searchInput.value.toLowerCase().trim();

    // Clear previous results and the initial message
    resultsDiv.innerHTML = '';

    if (query === "") {
        resultsDiv.innerHTML = '<p>Please enter a drink name or ingredient to search.</p>';
        return;
    }

    // Filter the database array
    const searchResults = cocktailDatabase.filter(drink => {
        // Search by drink name
        const nameMatch = drink.name.toLowerCase().includes(query);

        // Search by ingredients (check if ANY ingredient includes the query)
        const ingredientMatch = drink.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(query)
        );

        // A drink matches if its name OR one of its ingredients matches the query
        return nameMatch || ingredientMatch;
    });

    // --- 4. Display Results ---
    if (searchResults.length > 0) {
        searchResults.forEach(drink => {
            // Create a new div for each matching drink
            const drinkCard = document.createElement('div');
            drinkCard.classList.add('drink-card');

            // Populate the card with drink information
            drinkCard.innerHTML = `
                <h3>${drink.name}</h3>
                <p><strong>Type:</strong> ${drink.type}</p>
                <p><strong>Ingredients:</strong> ${drink.ingredients.join(', ')}</p>
                <p><strong>Notes:</strong> ${drink.instructions}</p>
            `;

            // Add the card to the results area
            resultsDiv.appendChild(drinkCard);
        });
    } else {
        // Display a message if no results were found
        resultsDiv.innerHTML = `<p>Sorry, no drinks found matching **"${query}"**. Try searching for 'Milk' or 'Tequila'.</p>`;
    }
}

