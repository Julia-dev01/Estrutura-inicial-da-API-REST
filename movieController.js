import db from '../database.js';

// Rota GET - Busca os filmes direto do banco de dados MySQL
export const getMovies = async (req, res) => {
    try {
        // Executa a query SQL
        const [rows] = await db.query('SELECT id, title, genre FROM movies ORDER BY id DESC');
        
        res.status(200).json(rows);
    } catch (error) {
        console.error("Erro no banco de dados:", error);
        res.status(500).json({ message: "Erro ao buscar filmes no banco de dados.", error: error.message });
    }
};

// Rota POST - Cadastra um novo filme no MySQL
export const createMovie = async (req, res) => {
    try {
        const { title, genre } = req.body;

        // Validação básica de erro
        if (!title || !genre) {
            return res.status(400).json({ message: "Título e Gênero são obrigatórios!" });
        }

        // Insere o filme usandoPrepared Statements para evitar SQL Injection (Boa prática profissional)
        const query = 'INSERT INTO movies (title, genre) VALUES (?, ?)';
        const [result] = await db.query(query, [title, genre]);

        // Retorna o filme recém-criado junto com o ID gerado pelo MySQL
        const newMovie = {
            id: result.insertId,
            title,
            genre
        };

        res.status(201).json(newMovie);
    } catch (error) {
        console.error("Erro no banco de dados:", error);
        res.status(500).json({ message: "Erro ao salvar filme no banco de dados.", error: error.message });
    }
};