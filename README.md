# 🎬 CineCine - Sistema de Gerenciamento de Filmes

O **CineCine** é uma aplicação web funcional desenvolvida para a atividade prática da **Aula 01 (Nível Avançado)**. O projeto consiste em uma API RESTful completa com arquitetura profissional em camadas (MVC simplificado), persistência real de dados utilizando o banco de dados relacional **MySQL** e uma interface frontend interativa desenvolvida com tecnologias web nativas.
O objetivo principal é simular o ecossistema real de uma aplicação web, aplicando a comunicação assíncrona entre cliente e servidor através de requisições HTTP, atualizando componentes de tela dinamicamente sem recarregar a página.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Node.js**: Ambiente de execução para o código JavaScript no servidor.
* **Express**: Framework minimalista para gerenciamento de rotas e middlewares.
* **CORS**: Middleware para habilitar e gerenciar requisições de origens cruzadas.
* **MySQL2**: Driver nativo com suporte a Promises para comunicação assíncrona com o banco de dados.

### Frontend
* **HTML5**: Estruturação semântica e acessível da aplicação.
* **CSS3**: Estilização moderna utilizando variáveis de escopo global (`:root`), layouts em Grid/Flexbox e responsividade para dispositivos móveis.
* **Vanilla JavaScript**: Manipulação assíncrona do DOM através da **Fetch API** (`async/await`) para consumo de endpoints.

---

## 📂 Arquitetura e Estrutura de Pastas

O projeto adota uma divisão profissional de responsabilidades para garantir escalabilidade e organização do código, isolando a lógica de negócio (Controllers) do mapeamento de endpoints (Routes) e conexões externas.

```text
At.1.1/
├── banco.sql               # Script de criação de tabelas do MySQL
├── README.md               # Documentação oficial do projeto
├── backend/                # Diretório do Servidor da API
│   ├── src/                # Código-fonte principal (Obrigatório)
│   │   ├── controllers/    # Lógica de negócio e manipulação de requisições
│   │   │   └── movieController.js
│   │   ├── routes/         # Mapeamento de rotas e endpoints HTTP
│   │   │   └── movieRoutes.js
│   │   ├── database.js     # Pool de conexões com o MySQL
│   │   └── server.js       # Ponto de entrada (Bootstrap) do servidor Express
│   └── package.json        # Dependências e scripts do Node.js
└── frontend/               # Diretório da Aplicação Cliente
    ├── index.html          # Estrutura e formulários da interface
    ├── style.css           # Folha de estilo (Identidade visual temática)
    └── app.js              # Consumo de API e renderização dinâmica do DOM

## 👩‍💻 Componentes da Equipe
Júlia das Neves, Alexandre Brito, Freson Rafael, Murilo de Assis, Luma Cristina
