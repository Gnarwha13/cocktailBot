// Application State
let cocktails = [...cocktailDatabase];
let currentResult = null;
let isListening = false;
let isSpeaking = false;
let recognition = null;

// Initialize Speech Recognition
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        recognition = new SpeechRecognition();
    } else {
        console.log('Speech recognition not supported');
        return false;
    }

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        console.log('Speech recognition started');
        isListening = true;
        updateMicButton();
        showMicStatus('Listening... Speak now!');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Heard:', transcript);
        document.getElementById('searchInput').value = transcript;
        searchCocktails(transcript);
        showMicStatus(`Heard: "${transcript}"`);
        setTimeout(() => hideMicStatus(), 3000);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        isListening = false;
        updateMicButton();
        
        let errorMessage = 'Error: ';
        switch(event.error) {
            case 'not-allowed':
            case 'permission-denied':
                errorMessage += 'Microphone access denied. Please allow microphone access in your browser settings.';
                break;
            case 'no-speech':
                errorMessage += 'No speech detected. Please try again.';
                break;
            case 'network':
                errorMessage += 'Network error. Please check your connection.';
                break;
            default:
                errorMessage += event.error;
        }
        showMicStatus(errorMessage);
        setTimeout(() => hideMicStatus(), 5000);
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
        isListening = false;
        updateMicButton();
    };

    return true;
}

// Update microphone button appearance
function updateMicButton() {
    const micBtn = document.getElementById('micBtn');
    const micText = document.getElementById('micText');
    
    if (isListening) {
        micBtn.className = 'flex-1 sm:flex-none px-6 py-3 rounded-lg transition flex items-center justify-center gap-2 touch-manipulation bg-red-500 text-white animate-pulse';
        if (micText) micText.textContent = 'Listening...';
    } else {
        micBtn.className = 'flex-1 sm:flex-none px-6 py-3 rounded-lg transition flex items-center justify-center gap-2 touch-manipulation bg-white/20 hover:bg-white/30 active:bg-white/40 text-white';
        if (micText) micText.textContent = 'Voice';
    }
}

// Show/hide mic status
function showMicStatus(message) {
    const status = document.getElementById('micStatus');
    status.textContent = message;
    status.classList.remove('hidden');
}

function hideMicStatus() {
    const status = document.getElementById('micStatus');
    status.classList.add('hidden');
}

// Start listening
function startListening() {
    if (!recognition) {
        if (!initSpeechRecognition()) {
            alert('Speech recognition is not supported in this browser. Please try Chrome, Edge, or Safari.');
            return;
        }
    }

    if (isListening) {
        recognition.stop();
        return;
    }

    try {
        recognition.start();
    } catch (error) {
        console.error('Error starting recognition:', error);
        showMicStatus('Error: Could not start microphone. Please try again.');
        setTimeout(() => hideMicStatus(), 3000);
    }
}

// Search cocktails
function searchCocktails(query) {
    if (!query || !query.trim()) {
        hideSearchResult();
        return;
    }

    const q = query.toLowerCase().trim();
    const scored = cocktails.map(cocktail => {
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
            if (word.length > 2) { // Skip very short words
                if (cocktail.name.toLowerCase().includes(word)) score += 2;
                if (cocktail.ingredients.some(i => i.toLowerCase().includes(word))) score += 1;
                if (cocktail.tags.some(t => t.toLowerCase().includes(word))) score += 1;
            }
        });

        return { ...cocktail, score };
    });

    const best = scored.reduce((max, c) => c.score > max.score ? c : max, scored[0]);
    
    if (best && best.score > 0) {
        displaySearchResult(best);
    } else {
        hideSearchResult();
        alert('No cocktails found. Try searching for ingredients like "vodka" or "citrus", or traits like "refreshing".');
    }
}

// Display search result
function displaySearchResult(cocktail) {
    currentResult = cocktail;
    
    document.getElementById('cocktailName').textContent = cocktail.name;
    document.getElementById('instructionsText').textContent = cocktail.instructions;
    
    // Ingredients
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    cocktail.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.className = 'text-gray-700 text-sm sm:text-base';
        li.textContent = '• ' + ing;
        ingredientsList.appendChild(li);
    });
    
    // Tags
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
    cocktail.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
    
    document.getElementById('searchResult').classList.remove('hidden');
    updateSpeakButton();
}

// Hide search result
function hideSearchResult() {
    document.getElementById('searchResult').classList.add('hidden');
    currentResult = null;
    stopSpeaking();
}

// Text-to-Speech
function speakRecipe() {
    if (!currentResult) return;

    if (!('speechSynthesis' in window)) {
        alert('Text-to-speech is not supported in this browser.');
        return;
    }

    if (isSpeaking) {
        stopSpeaking();
        return;
    }

    const text = `${currentResult.name}. Ingredients: ${currentResult.ingredients.join(', ')}. Instructions: ${currentResult.instructions}`;
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
        isSpeaking = true;
        updateSpeakButton();
    };
    
    utterance.onend = () => {
        isSpeaking = false;
        updateSpeakButton();
    };
    
    utterance.onerror = () => {
        isSpeaking = false;
        updateSpeakButton();
        alert('Error reading recipe. Please try again.');
    };

    window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    updateSpeakButton();
}

function updateSpeakButton() {
    const speakBtn = document.getElementById('speakBtn');
    if (isSpeaking) {
        speakBtn.className = 'p-2 rounded-lg transition touch-manipulation bg-purple-600 text-white';
        speakBtn.title = 'Stop reading';
        speakBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="22" x2="16" y1="9" y2="15"></line>
            <line x1="16" x2="22" y1="9" y2="15"></line>
        </svg>`;
    } else {
        speakBtn.className = 'p-2 rounded-lg transition touch-manipulation text-purple-600 hover:bg-purple-100 active:bg-purple-200';
        speakBtn.title = 'Read recipe aloud';
        speakBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>`;
    }
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

    // Microphone
    document.getElementById('micBtn').addEventListener('click', startListening);

    // Result actions
    document.getElementById('speakBtn').addEventListener('click', speakRecipe);
    document.getElementById('closeBtn').addEventListener('click', hideSearchResult);

    // Add form
    document.getElementById('addBtn').addEventListener('click', showAddForm);
    document.getElementById('submitBtn').addEventListener('click', addCocktail);
    document.getElementById('cancelBtn').addEventListener('click', hideAddForm);

    // Initialize speech recognition on page load
    initSpeechRecognition();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    stopSpeaking();
    if (recognition && isListening) {
        recognition.stop();
    }
});