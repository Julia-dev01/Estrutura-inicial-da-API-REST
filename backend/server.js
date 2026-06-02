import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});