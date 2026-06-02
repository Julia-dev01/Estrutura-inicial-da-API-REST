
CREATE DATABASE streaming_db;
USE streaming_db;


CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO movies (title, genre) VALUES 
('Interstellar', 'Ficção Científica'),
('O Poderoso Chefão', 'Drama');