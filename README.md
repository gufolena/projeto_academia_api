# projeto_academia_api

## Descrição

Este projeto é uma API para buscar e traduzir informações sobre exercícios físicos de uma academia utilizando a API Ninjas e a API do Google Tradutor. A API permite buscar exercícios com base em filtros como músculo, tipo de exercício e dificuldade, retornando os dados traduzidos para o português. O frontend consome essa API e exibe as informações de forma interativa para o usuário.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Frontend**: React
- **Bibliotecas**:
  - **express**: Framework para criar o servidor.
  - **axios**: Para realizar requisições HTTP à API da Ninjas.
  - **cors**: Para permitir que o frontend acesse a API.
  - **dotenv**: Para carregar variáveis de ambiente de maneira segura (como chaves de API).

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o **Node.js** instalado em sua máquina.

- [Baixar o Node.js](https://nodejs.org/)

## Instalação

### Backend

1. Navegue até a pasta do backend (`projeto_academia_api`).
2. Execute os seguintes comandos para inicializar o projeto e instalar as dependências:

```bash
npm init -y
npm install express axios cors dotenv


Isso instala as dependências do projeto:

express: Framework para criar o servidor.
axios: Para fazer requisições HTTP na API Ninjas.
cors: Para permitir o acesso do frontend.
dotenv: Para carregar variáveis de ambiente de maneira segura.


### Backend

Crie um arquivo .env na raiz do seu projeto backend (projeto_academia_api).
Adicione a chave da API Ninjas e a chave da API do Google Tradutor no arquivo .env:

Rodando o Projeto
Primeiro, execute o backend:
Na pasta projeto_academia_api, rode o comando:

node server.js


Isso iniciará o servidor backend, que estará disponível em http://localhost:5000.


Depois, execute o frontend:


cd frontend
npm start


Estrutura do Projeto
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

