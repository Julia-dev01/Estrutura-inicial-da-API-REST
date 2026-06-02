const API_URL = 'http://localhost:3000/api/movies';
const movieForm = document.getElementById('movieForm');
const movieList = document.getElementById('movieList');

// Busca da API e atualiza a seção "lista de filmes"
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const movies = await response.json();
        
        movieList.innerHTML = '';
        
        if (movies.length === 0) {
            movieList.innerHTML = '<li style="color: #aaa; font-style: italic;">Nenhum filme cadastrado ainda.</li>';
            return;
        }

        movies.forEach(movie => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${movie.title}</strong> <span>${movie.genre}</span>`;
            movieList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

// Envia os dados inseridos (POST) e recarrega a lista sem dar refresh na página
movieForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, genre })
        });

        if (response.ok) {
            movieForm.reset(); // Limpa formulário
            fetchMovies();     // Atualiza a lista automaticamente!
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
});

fetchMovies();