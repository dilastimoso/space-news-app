const API_KEY = 'pub_d3e9ccadf00442e7b9531799a5d8bdc2';

const newsGrid = document.getElementById('newsGrid');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const noResults = document.getElementById('noResults');

let currentArticles = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchNews('top');
});

searchInput.addEventListener('input', (e) => filterNews(e.target.value));
categorySelect.addEventListener('change', (e) => fetchNews(e.target.value));

async function fetchNews(category) {
    showLoading(true);
    errorState.classList.add('hidden');

    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ph&language=en&prioritydomain=top&domainurl=news.abs-cbn.com&category=${category}`;

    try {
        const response = await fetch(url);
        
        if (response.status === 401 || response.status === 403) {
            throw new Error("Invalid API Key or Limit Reached.");
        }
        if (response.status === 429) {
            throw new Error("Too many requests. Please wait.");
        }
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        
        showLoading(false);

        if (!data.results) {
            throw new Error("No articles found.");
        }

        currentArticles = data.results;
        renderNews(currentArticles);

    } catch (error) {
        showLoading(false);
        showError(error.message);
    }
}

function renderNews(articles) {
    newsGrid.innerHTML = '';
    
    if (!articles || articles.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    articles.forEach(article => {
        const img = article.image_url || 'https://via.placeholder.com/400x200?text=No+Image+Available';
        const date = article.pubDate ? new Date(article.pubDate).toLocaleDateString() : 'Recent';
        const title = article.title || "No Title";
        const desc = article.description || "Click 'Read Full Story' for more details.";
        const url = article.link || "#";

        const card = `
            <article class="news-card">
                <img src="${img}" alt="News Image" class="card-img">
                <div class="card-body">
                    <span class="card-date">${date}</span>
                    <h3 class="card-title">${title}</h3>
                    <p class="card-desc">${desc}</p>
                    <a href="${url}" target="_blank" class="btn">Read Full Story</a>
                </div>
            </article>
        `;
        newsGrid.innerHTML += card;
    });
}

function filterNews(query) {
    if(!currentArticles) return;
    
    const term = query.toLowerCase();
    const filtered = currentArticles.filter(article => 
        (article.title && article.title.toLowerCase().includes(term)) || 
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
