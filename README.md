Projeto Academia API

📌 Descrição

Este projeto é uma API para buscar e traduzir informações sobre exercícios físicos de uma academia utilizando a API Ninjas e a API do Google Tradutor. A API permite buscar exercícios com base em filtros como músculo, tipo de exercício e dificuldade, retornando os dados traduzidos para o português. O frontend consome essa API e exibe as informações de forma interativa para o usuário.

🛠 Tecnologias Utilizadas

🔹 Backend

Node.js

Express

Bibliotecas:

express - Framework para criar o servidor.

axios - Para realizar requisições HTTP à API da Ninjas.

cors - Para permitir que o frontend acesse a API.

dotenv - Para carregar variáveis de ambiente de maneira segura (como chaves de API).

🔹 Frontend

React

⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o Node.js instalado em sua máquina.

🔗 Baixar o Node.js

📥 Instalação

🔹 Backend

1️⃣ Navegue até a pasta do backend (projeto_academia_api).
2️⃣ Execute os seguintes comandos para inicializar o projeto e instalar as dependências:

npm init -y
npm install express axios cors dotenv

🔹 Isso instala as dependências do projeto:

express - Framework para criar o servidor.

axios - Para fazer requisições HTTP na API Ninjas.

cors - Para permitir o acesso do frontend.

dotenv - Para carregar variáveis de ambiente de maneira segura.

🔑 Configuração do Backend

Crie um arquivo .env na raiz do seu projeto backend (projeto_academia_api).
Adicione a chave da API Ninjas e a chave da API do Google Tradutor no arquivo .env:

NINJAS_API_KEY=SUA_CHAVE_AQUI
GOOGLE_TRANSLATE_API_KEY=SUA_CHAVE_AQUI

🚀 Rodando o Projeto

🔹 Executando o Backend

Navegue até a pasta projeto_academia_api e rode o comando:

node server.js

✅ Isso iniciará o servidor backend, que estará disponível em: http://localhost:5000

🔹 Executando o Frontend

cd frontend
npm start

📂 Estrutura do Projeto

projeto_academia_api/
│
├── server.js                # Arquivo principal do servidor backend
├── .env                     # Arquivo com as variáveis de ambiente
├── package.json             # Gerenciador de dependências do backend
│
└── frontend/                # Pasta do frontend
    ├── public/              # Arquivos públicos do frontend (HTML, imagens, etc.)
    ├── src/                 # Código-fonte do frontend (React)
    ├── package.json         # Gerenciador de dependências do frontend

🔗 Links das APIs

API Ninjas - https://www.api-ninjas.com/api/exercises

Google Cloud Translate API - https://cloud.google.com/translate/docs/reference/api-overview

📌 Projeto desenvolvido para facilitar a busca e tradução de exercícios físicos! 💪🔥