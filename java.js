let suggestions = ["Vestido de verão", "Blusa feminina", "Calça jeans", "Saia midi", "Acessórios", "Promoções"];

const searchInput = document.getElementById('searchInput');
const clearButton = document.getElementById('clearButton');
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';
    
    if (inputValue) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue)
        );
        
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.addEventListener('click', () => {
                window.location.href = `https://${suggestion.toLowerCase()}.com`;
            });
            suggestionsList.appendChild(li);
        });
    }
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    suggestionsList.innerHTML = '';
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            window.location.href = `https://${query}.com`;
        }
    }
});



searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        if (query) {
            window.location.href = `https://${query}.com`;
        }
    }
});













/*Estrelas da pagina de compras*/

 
        const starRating = document.getElementById('star-rating');
        const stars = starRating.getElementsByClassName('star');
        const ratingValue = document.getElementById('rating-value');
        let currentRating = 0;

        starRating.addEventListener('click', (e) => {
            if (e.target.classList.contains('star')) {
                currentRating = parseInt(e.target.getAttribute('data-value'));
                updateStars();
                ratingValue.textContent = `Rating: ${currentRating}/5`;
            }
        });

        starRating.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('star')) {
                const hoverValue = parseInt(e.target.getAttribute('data-value'));
                highlightStars(hoverValue);
            }
        });

        starRating.addEventListener('mouseout', () => {
            highlightStars(currentRating);
        });

        function updateStars() {
            highlightStars(currentRating);
        }

        function highlightStars(count) {
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.toggle('active', i < count);
            }
        }