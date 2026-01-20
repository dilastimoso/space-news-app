<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Brief | Real-Time News</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="app-header">
        <div class="container header-content">
            <div class="logo">
                <h1>🌍 Global Brief</h1>
            </div>
            <div class="controls">
                <select id="categorySelect">
                    <option value="Philippines">General</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <input type="text" id="searchInput" placeholder="Search headlines...">
            </div>
        </div>
    </header>

    <main class="container">
        <div id="loadingState" class="loading">
            <div class="spinner"></div>
            <p>Fetching live news...</p>
        </div>

        <div id="errorState" class="error-box hidden"></div>

        <section>
            <div id="newsGrid" class="news-grid hidden"></div>
            <div id="noResults" class="hidden">No stories found matching your search.</div>
        </section>
    </main>

    <footer>
        <p>Powered by GNews API • Module 1 Summative Exam</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
