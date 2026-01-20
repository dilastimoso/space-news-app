:root {
    --primary: #cc0000;
    --bg: #f3f4f6;
    --text: #111827;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }

body { background: var(--bg); color: var(--text); padding-bottom: 50px; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.app-header { background: white; padding: 1rem 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
.header-content { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.logo h1 { color: var(--primary); font-weight: 800; letter-spacing: -1px; }

.controls { display: flex; gap: 10px; width: 100%; max-width: 600px; }
select, input { padding: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; }
input { flex-grow: 1; }

.news-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }

.news-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.2s; display: flex; flex-direction: column; }
.news-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

.card-img { width: 100%; height: 180px; object-fit: cover; background: #eee; }
.card-body { padding: 15px; display: flex; flex-direction: column; flex-grow: 1; }
.card-date { font-size: 0.8rem; color: #888; margin-bottom: 5px; }
.card-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; line-height: 1.4; }
.card-desc { font-size: 0.9rem; color: #555; margin-bottom: 15px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.btn { margin-top: auto; display: inline-block; background: var(--text); color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; text-align: center; font-size: 0.9rem; }
.btn:hover { background: var(--primary); }

.hidden { display: none !important; }
.loading { text-align: center; padding: 40px; color: #666; }
.spinner { width: 40px; height: 40px; border: 4px solid #ddd; border-top-color: var(--primary); border-radius: 50%; animation: spin 1s infinite; margin: 0 auto 10px; }
@keyframes spin { to { transform: rotate(360deg); } }

.error-box {
    background-color: #fee2e2;
    border: 1px solid #ef4444;
    color: #b91c1c;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
}

@media(min-width: 768px) {
    .header-content { flex-direction: row; justify-content: space-between; }
}
