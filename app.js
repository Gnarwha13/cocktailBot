// Application State
let cocktails = [...cocktailDatabase];
let currentResults = [];
let isSpeaking = false;
let selectedIngredients = [];
let filterLogic = 'OR'; // 'OR' or 'AND'
let allIngredients = [];

// Extract all unique ingredients from database
function initializeIngredients() {
    const ingredientSet = new Set();
    cocktails.forEach(cocktail => {
        cocktail.ingredients.forEach(ing => {
            // Extract main ingredient name (remove measurements)
            const mainIngredient = ing.toLowerCase()
                .replace(/[\d.]+\s*(oz|ml|tsp|tbsp|dash|dashes|cup|cups|splash|sprig|spoon|cube|wedge|peel|slice|leaves|leaf)/gi, '')
                .trim()
                .split(/,| for | and /)[0]
                .trim();
            if (mainIngredient && mainIngredient.length > 2) {
                ingredientSet.add(mainIngredient);
            }
        });
    });
    allIngredients = Array.from(ingredientSet).sort();
    populateIngredientDropdown();
}

// Populate ingredient dropdown
function populateIngredientDropdown() {
    const dropdown = document.getElementById('ingredientDropdown');
    
    allIngredients.forEach(ingredient => {
        const option = document.createElement('option');
        option.value = ingredient;
        option.textContent = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
        dropdown.appendChild(option);
    });
}

// Add ingredient from dropdown
function addIngredientFilter() {
    const dropdown = document.getElementById('ingredientDropdown');
    const ingredient = dropdown.value;
    
    if (!ingredient) return;
    
    if (!selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        renderSelectedIngredients();
        performSearch();
    }
    
    dropdown.value = '';
}

// Render selected ingredients as pills
function renderSelectedIngredients() {
    const container = document.getElementById('selectedIngredients');
    container.innerHTML = '';
    
    if (selectedIngredients.length === 0) {
        container.innerHTML = '<span class="text-white/60 text-xs">No ingredients selected</span>';
        return;
    }
    
    selectedIngredients.forEach(ingredient => {
        const pill = document.createElement('div');
        pill.className = 'flex items-center gap-2 px-3 py-1 bg-purple-500 text-white rounded-full text-xs';
        
        pill.innerHTML = `
            <span>${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</span>
            <button class="hover:bg-purple-600 rounded-full p-0.5 transition" data-ingredient="${ingredient}">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" stroke-width="2"></path>
                </svg>
            </button>
        `;
        
        container.appendChild(pill);
        
        // Add remove functionality
        pill.querySelector('button').addEventListener('click', () => {
            removeIngredient(ingredient);
        });
    });
}

// Remove ingredient
function removeIngredient(ingredient) {
    const index = selectedIngredients.indexOf(ingredient);
    if (index > -1) {
        selectedIngredients.splice(index, 1);
        renderSelectedIngredients();
        performSearch();
    }
}

// Clear all filters
function clearAllFilters() {
    selectedIngredients = [];
    renderSelectedIngredients();
    hideSearchResults();
}

// Search cocktails
function searchCocktails(query) {
    performSearch(query);
}

function performSearch(query = null) {
    const searchQuery = query || document.getElementById('searchInput').value;
    const resultCount = document.getElementById('resultCount').value;
    
    // Start with all cocktails
    let filtered = [...cocktails];
    
    // Apply ingredient filters
    if (selectedIngredients.length > 0) {
        filtered = filtered.filter(cocktail => {
            const cocktailIngredients = cocktail.ingredients.map(ing => ing.toLowerCase());
            
            if (filterLogic === 'AND') {
                // Must have ALL selected ingredients
                return selectedIngredients.every(selected => 
                    cocktailIngredients.some(ci => ci.includes(selected))
                );
            } else {
                // Must have ANY selected ingredient
                return selectedIngredients.some(selected => 
                    cocktailIngredients.some(ci => ci.includes(selected))
                );
            }
        });
    }
    
    // Apply text search and scoring if there's a query
    if (searchQuery && searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        
        const scored = filtered.map(cocktail => {
            let score = 0;
            
            // Exact name match
            if (cocktail.name.toLowerCase() === q) {
                score += 100;
            } else if (cocktail.name.toLowerCase().includes(q)) {
                score += 10;
            }
            
            // Ingredient match
            if (cocktail.ingredients.some(i => i.toLowerCase().includes(q))) {
                score += 5;
            }
            
            // Tag match
            if (cocktail.tags.some(t => t.toLowerCase().includes(q))) {
                score += 3;
            }
            
            // Word-by-word match
            const words = q.split(' ');
            words.forEach(word => {
                if (word.length > 2) {
                    if (cocktail.name.toLowerCase().includes(word)) score += 2;
                    if (cocktail.ingredients.some(i => i.toLowerCase().includes(word))) score += 1;
                    if (cocktail.tags.some(t => t.toLowerCase().includes(word))) score += 1;
                }
            });

            return { ...cocktail, score };
        });

        filtered = scored.filter(c => c.score > 0).sort((a, b) => b.score - a.score);
    }
    
    // If no search query and no filters, don't show results
    if ((!searchQuery || !searchQuery.trim()) && selectedIngredients.length === 0) {
        hideSearchResults();
        return;
    }
    
    // Apply result count limit
    if (resultCount !== 'all') {
        filtered = filtered.slice(0, parseInt(resultCount));
    }
    
    if (filtered.length > 0) {
        displaySearchResults(filtered);
    } else {
        hideSearchResults();
        alert('No cocktails found matching your search and filters.');
    }
}

// Display search results
function displaySearchResults(results) {
    currentResults = results;
    const container = document.getElementById('searchResults');
    container.innerHTML = '';
    
    results.forEach((cocktail, index) => {
        const resultCard = document.createElement('div');
        resultCard.className = 'bg-white rounded-2xl p-6 sm:p-8 shadow-2xl';
        
        resultCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-2xl sm:text-3xl font-bold text-purple-900">${cocktail.name}</h2>
                    ${results.length > 1 ? `<p class="text-sm text-gray-500 mt-1">Result ${index + 1} of ${results.length}</p>` : ''}
                </div>
                <div class="flex gap-2">
                    <button
                        class="speak-btn p-2 rounded-lg transition touch-manipulation text-purple-600 hover:bg-purple-100 active:bg-purple-200"
                        data-index="${index}"
                        title="Read recipe aloud"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="mb-4">
                <h3 class="text-base sm:text-lg font-semibold text-purple-800 mb-2">Ingredients</h3>
                <ul class="space-y-1">
                    ${cocktail.ingredients.map(ing => `<li class="text-gray-700 text-sm sm:text-base">• ${ing}</li>`).join('')}
                </ul>
            </div>

            <div class="mb-4">
                <h3 class="text-base sm:text-lg font-semibold text-purple-800 mb-2">Instructions</h3>
                <p class="text-gray-700 text-sm sm:text-base">${cocktail.instructions}</p>
            </div>

            <div class="flex flex-wrap gap-2">
                ${cocktail.tags.map(tag => `<span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm">${tag}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(resultCard);
        
        // Add event listener for speak button
        resultCard.querySelector('.speak-btn').addEventListener('click', () => {
            speakRecipe(cocktail);
        });
    });
}

// Hide search results
function hideSearchResults() {
    document.getElementById('searchResults').innerHTML = '';
    currentResults = [];
    stopSpeaking();
}

// Text-to-Speech
function speakRecipe(cocktail) {
    if (!cocktail) return;

    if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in this browser.');
        return;
    }

    if (isSpeaking) {
        stopSpeaking();
        return;
    }

    const text = `${cocktail.name}. Ingredients: ${cocktail.ingredients.join(', ')}. Instructions: ${cocktail.instructions}`;
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
        isSpeaking = true;
    };
    
    utterance.onend = () => {
        isSpeaking = false;
    };
    
    utterance.onerror = () => {
        isSpeaking = false;
        alert('Error reading recipe. Please try again.');
    };

    window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
}

// Add cocktail form
function showAddForm() {
    document.getElementById('addForm').classList.remove('hidden');
}

function hideAddForm() {
    document.getElementById('addForm').classList.add('hidden');
    clearAddForm();
}

function clearAddForm() {
    document.getElementById('newName').value = '';
    document.getElementById('newIngredients').value = '';
    document.getElementById('newInstructions').value = '';
    document.getElementById('newTags').value = '';
}

function addCocktail() {
    const name = document.getElementById('newName').value.trim();
    const ingredientsText = document.getElementById('newIngredients').value.trim();
    const instructions = document.getElementById('newInstructions').value.trim();
    const tagsText = document.getElementById('newTags').value.trim();

    if (!name || !ingredientsText || !instructions || !tagsText) {
        alert('Please fill in all fields');
        return;
    }

    const ingredients = ingredientsText
        .split('\n')
        .map(i => i.trim())
        .filter(i => i);

    const tags = tagsText
        .split(',')
        .map(t => t.trim().toLowerCase())
        .filter(t => t);

    const newCocktail = {
        id: Date.now(),
        name,
        ingredients,
        instructions,
        tags
    };

    cocktails.push(newCocktail);
    hideAddForm();
    alert(`${name} added successfully!`);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ingredient filters
    initializeIngredients();
    renderSelectedIngredients();
    
    // Search
    document.getElementById('searchBtn').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        searchCocktails(query);
    });

    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = document.getElementById('searchInput').value;
            searchCocktails(query);
        }
    });
    
    // Add ingredient from dropdown
    document.getElementById('addIngredientBtn').addEventListener('click', addIngredientFilter);
    
    document.getElementById('ingredientDropdown').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIngredientFilter();
        }
    });
    
    // Result count selector
    document.getElementById('resultCount').addEventListener('change', () => {
        const searchQuery = document.getElementById('searchInput').value;
        if (searchQuery.trim() || selectedIngredients.length > 0) {
            performSearch();
        }
    });
    
    // Filter logic toggle
    document.getElementById('filterLogicBtn').addEventListener('click', () => {
        filterLogic = filterLogic === 'OR' ? 'AND' : 'OR';
        const btn = document.getElementById('filterLogicBtn');
        if (filterLogic === 'AND') {
            btn.innerHTML = '<span id="filterLogicText">ALL</span> (AND)';
        } else {
            btn.innerHTML = '<span id="filterLogicText">ANY</span> (OR)';
        }
        if (selectedIngredients.length > 0) {
            performSearch();
        }
    });
    
    // Clear filters
    document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);

    // Add form
    document.getElementById('addBtn').addEventListener('click', showAddForm);
    document.getElementById('submitBtn').addEventListener('click', addCocktail);
    document.getElementById('cancelBtn').addEventListener('click', hideAddForm);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    stopSpeaking();
});
