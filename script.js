const API_KEY = '1e50933ed1437b06ba9abbbfeefeedf8';

const newsGrid = document.getElementById('newsGrid');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const noResults = document.getElementById('noResults');

let currentArticles = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchNews('Philippines News');
});

searchInput.addEventListener('input', (e) => filterNews(e.target.value));
categorySelect.addEventListener('change', (e) => fetchNews(e.target.value));

async function fetchNews(query) {
    showLoading(true);
    errorState.classList.add('hidden');

   
    const timestamp = new Date().getTime();
    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&sortby=publishedAt&apikey=${API_KEY}&_=${timestamp}`;

    try {
        const response = await fetch(url);
        
        if (response.status === 403) {
            throw new Error("API Limit Reached. Please wait a moment and refresh.");
        }
        if (response.status === 429) {
            throw new Error("Too many requests. Please wait 1 minute.");
        }
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.articles) {
            throw new Error("No articles data found");
        }

        currentArticles = data.articles;
        renderNews(currentArticles);
        showLoading(false);

    } catch (error) {
        showLoading(false);
        showError(error.message);
    }
}

function renderNews(articles) {
    newsGrid.innerHTML = '';
    
    if (articles.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    articles.forEach(article => {
        const img = article.image || 'https://via.placeholder.com/400x200?text=No+Image+Available';
        const date = new Date(article.publishedAt).toLocaleDateString();

        const card = `
            <article class="news-card">
                <img src="${img}" alt="News Image" class="card-img">
                <div class="card-body">
                    <span class="card-date">${date}</span>
                    <h3 class="card-title">${article.title}</h3>
                    <p class="card-desc">${article.description || "Click 'Read Full Story' for more details."}</p>
                    <a href="${article.url}" target="_blank" class="btn">Read Full Story</a>
                </div>
            </article>
        `;
        newsGrid.innerHTML += card;
    });
}

function filterNews(query) {
    const term = query.toLowerCase();
    const filtered = currentArticles.filter(article => 
        article.title.toLowerCase().includes(term) || 
        (article.description && article.description.toLowerCase().includes(term))
    );
    renderNews(filtered);
}

function showLoading(isLoading) {
    if (isLoading) {
        loadingState.classList.remove('hidden');
        newsGrid.classList.add('hidden');
    } else {
        loadingState.classList.add('hidden');
        newsGrid.classList.remove('hidden');
    }
}

function showError(message) {
    loadingState.classList.add('hidden');
    newsGrid.classList.add('hidden');
    errorState.textContent = message;
    errorState.classList.remove('hidden');
}
